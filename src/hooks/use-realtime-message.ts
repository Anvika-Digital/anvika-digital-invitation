'use client'

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import { supabase } from '@/lib/supabase'
import type { Message } from '@/types/message'
import type { RealtimeChannel } from '@supabase/supabase-js'

interface UseRealtimeMessageReturn {
  messages: Message[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  totalCount: number
}

const MESSAGE_LIMIT = 10
const REALTIME_DELAY = 1000 // 1 second delay for real-time updates

export function useRealtimeMessage(invitationId: string): UseRealtimeMessageReturn {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState(0)
  const channelRef = useRef<RealtimeChannel | null>(null)
  const isSubscribedRef = useRef(false)
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const pendingMessagesRef = useRef<Message[]>([]) // Queue for pending messages

  // Memoize channel name to prevent unnecessary recreations
  const channelName = useMemo(() => `messages-${invitationId}`, [invitationId])

  // Optimized fetch with early return if no invitationId
  const fetchMessages = useCallback(async () => {
    if (!invitationId) {
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)

      const {
        data,
        error: fetchError,
        count,
      } = await supabase
        .from('messages')
        .select('id, invitation_id, name, message, created_at', { count: 'exact' }) // Select only needed fields
        .eq('invitation_id', invitationId)
        .is('deleted_at', null)
        .order('created_at', { ascending: false })
        .limit(MESSAGE_LIMIT)

      if (fetchError) {
        throw fetchError
      }

      setMessages(data || [])
      setTotalCount(count || 0)
    } catch (err) {
      console.error('Error fetching messages:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch messages')
    } finally {
      setLoading(false)
    }
  }, [invitationId])

  // Optimized insert handler with message queuing and delay
  const handleInsert = useCallback(
    (payload: { new: Message }) => {
      const newMessage = payload.new

      // Early returns for efficiency
      if (!newMessage || newMessage.invitation_id !== invitationId || newMessage.deleted_at) {
        return
      }

      // Add message to pending queue
      pendingMessagesRef.current = [...pendingMessagesRef.current, newMessage]

      // Clear existing timer if any
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current)
      }

      // Process all pending messages after delay
      delayTimerRef.current = setTimeout(() => {
        const messagesToProcess = [...pendingMessagesRef.current]
        pendingMessagesRef.current = [] // Clear the queue

        if (messagesToProcess.length > 0) {
          setMessages(prev => {
            // Filter out duplicates and add new messages
            const newMessages = messagesToProcess.filter(
              newMsg => !prev.some(existingMsg => existingMsg.id === newMsg.id)
            )

            // Add all new messages at once (newest first)
            return [...newMessages.reverse(), ...prev]
          })

          setTotalCount(prev => prev + messagesToProcess.length)
        }
      }, REALTIME_DELAY)
    },
    [invitationId]
  )

  // Memoized subscription callback to prevent recreation
  const handleSubscriptionStatus = useCallback((status: string) => {
    if (status === 'SUBSCRIBED') {
      isSubscribedRef.current = true
      console.log('✅ Real-time subscription active for messages')
    } else if (status === 'CHANNEL_ERROR') {
      isSubscribedRef.current = false
      console.error('❌ Real-time subscription error')
      setError('Real-time connection failed')
    } else if (status === 'CLOSED') {
      isSubscribedRef.current = false
    }
  }, [])

  // Optimized subscription setup
  useEffect(() => {
    if (!invitationId) {
      setMessages([])
      setTotalCount(0)
      setLoading(false)
      return
    }

    // Cleanup previous subscription if exists
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current)
      channelRef.current = null
      isSubscribedRef.current = false
    }

    // Fetch initial data
    fetchMessages()

    // Setup new subscription
    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `invitation_id=eq.${invitationId}`,
        },
        handleInsert
      )
      .subscribe(handleSubscriptionStatus)

    channelRef.current = channel

    // Cleanup function
    return () => {
      // Clear any pending delayed updates
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current)
        delayTimerRef.current = null
      }

      // Clear pending messages queue
      pendingMessagesRef.current = []

      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
        channelRef.current = null
        isSubscribedRef.current = false
      }
    }
  }, [invitationId, channelName, fetchMessages, handleInsert, handleSubscriptionStatus])

  // Memoize return object to prevent unnecessary re-renders
  return useMemo(
    () => ({
      messages,
      loading,
      error,
      refetch: fetchMessages,
      totalCount,
    }),
    [messages, loading, error, fetchMessages, totalCount]
  )
}
