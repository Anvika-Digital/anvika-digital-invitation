'use client'

import React from 'react'
import CustomScrollbar from './custom-scrollbar'
import { useRealtimeMessage } from '@/hooks/use-realtime-message'
import { AnimatePresence, motion } from 'motion/react'

export default function WishesMessageBox() {
  const { messages, loading, error } = useRealtimeMessage('tata-dan-widya')

  if (loading) {
    return (
      <CustomScrollbar className="h-[400px] w-full overflow-y-auto">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-white/70">Memuat pesan...</p>
        </div>
      </CustomScrollbar>
    )
  }

  if (error) {
    return (
      <CustomScrollbar className="h-[400px] w-full overflow-y-auto">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-red-300">Gagal memuat pesan</p>
        </div>
      </CustomScrollbar>
    )
  }

  if (messages.length === 0) {
    return (
      <CustomScrollbar className="h-[400px] w-full overflow-y-auto">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-white/70">Belum ada pesan. Jadilah yang pertama!</p>
        </div>
      </CustomScrollbar>
    )
  }

  return (
    <CustomScrollbar className="h-[400px] w-full overflow-y-auto">
      <div className="h-full w-full space-y-4 px-2 pb-6">
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              layout
            >
              <ChatBubble
                name={msg.name}
                message={msg.message}
                createdAt={new Date(msg.created_at)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </CustomScrollbar>
  )
}

type ChatBubbleProps = {
  name: string
  message: string
  createdAt: Date
}

function ChatBubble({ name, message, createdAt }: ChatBubbleProps) {
  return (
    <li className="flex flex-col items-end gap-y-2">
      <motion.div
        className="space-y-4 rounded-lg bg-white/80 px-4 py-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
          delay: 0.1,
        }}
      >
        <motion.p
          className="text-foreground text-xs uppercase"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {name}
        </motion.p>
        <motion.p
          className="text-foreground text-sm font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {message}
        </motion.p>
        <motion.p
          className="text-muted-foreground text-right text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {createdAt.toDateString()}
        </motion.p>
      </motion.div>
    </li>
  )
}
