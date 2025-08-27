'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

type FloatingAudioPlayerProps = {
  audioSrc?: string
  autoPlay?: boolean
  showVolumeControl?: boolean
  className?: string
}

type AudioState = {
  isPlaying: boolean
  isLoading: boolean
  isMuted: boolean
  hasError: boolean
  duration: number
  currentTime: number
}

export default function FloatingAudioPlayer({
  audioSrc,
  autoPlay = false,
  showVolumeControl = false,
  className,
}: FloatingAudioPlayerProps) {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    isLoading: false,
    isMuted: false,
    hasError: false,
    duration: 0,
    currentTime: 0,
  })

  const audioRef = useRef<HTMLAudioElement>(null)
  const [userInteracted, setUserInteracted] = useState(false)
  const [hasUserControlledPlayback, setHasUserControlledPlayback] = useState(false)
  const [wasPlayingBeforeHidden, setWasPlayingBeforeHidden] = useState(false)

  // Update audio state helper
  const updateAudioState = useCallback((updates: Partial<AudioState>) => {
    setAudioState(prev => ({ ...prev, ...updates }))
  }, [])

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadStart = () => updateAudioState({ isLoading: true, hasError: false })
    const handleCanPlay = () => updateAudioState({ isLoading: false })
    const handleLoadedMetadata = () => updateAudioState({ duration: audio.duration })
    const handleTimeUpdate = () => updateAudioState({ currentTime: audio.currentTime })
    const handlePlay = () => {
      console.log('Audio play event fired')
      updateAudioState({ isPlaying: true })
    }
    const handlePause = () => {
      console.log('Audio pause event fired')
      updateAudioState({ isPlaying: false })
    }
    const handleEnded = () => updateAudioState({ isPlaying: false, currentTime: 0 })
    const handleError = () => {
      console.error('Audio error:', audio.error)
      updateAudioState({ hasError: true, isLoading: false, isPlaying: false })
    }

    // Add event listeners
    audio.addEventListener('loadstart', handleLoadStart)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [updateAudioState])

  // Handle page visibility and lifecycle
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current
      if (!audio) return

      console.log(
        'Visibility change - hidden:',
        document.hidden,
        'isPlaying:',
        audioState.isPlaying
      )

      if (document.hidden) {
        // Tab is being hidden - remember if audio was playing and pause it
        if (audioState.isPlaying) {
          console.log('Tab hidden - pausing audio and remembering state')
          setWasPlayingBeforeHidden(true)
          audio.pause()
        } else {
          setWasPlayingBeforeHidden(false)
        }
      } else {
        // Tab is becoming visible again - resume if it was playing before
        if (wasPlayingBeforeHidden && !audioState.isPlaying) {
          console.log('Tab visible again - resuming audio')
          audio.play().catch(error => {
            console.error('Error resuming audio:', error)
          })
        }
        // Reset the flag after handling
        setWasPlayingBeforeHidden(false)
      }
    }

    const handleBeforeUnload = () => {
      const audio = audioRef.current
      if (audio && audioState.isPlaying) {
        audio.pause()
      }
    }

    // Track user interaction for autoplay compliance
    const handleUserInteraction = () => {
      setUserInteracted(true)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [audioState.isPlaying, wasPlayingBeforeHidden])

  // Auto-play logic
  useEffect(() => {
    // Only auto-play on initial load and if user hasn't manually controlled playback
    if (
      autoPlay &&
      userInteracted &&
      !audioState.isPlaying &&
      !audioState.hasError &&
      !hasUserControlledPlayback
    ) {
      const audio = audioRef.current
      if (!audio) return

      console.log('Auto-playing audio')
      // Auto-play without using togglePlayPause to avoid double triggering
      audio.play().catch(error => {
        console.error('Auto-play failed:', error)
        updateAudioState({ hasError: true })
      })
    }
  }, [
    autoPlay,
    userInteracted,
    audioState.isPlaying,
    audioState.hasError,
    hasUserControlledPlayback,
    updateAudioState,
  ])

  const togglePlayPause = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || audioState.hasError) return

    // Mark that user has manually controlled playback
    setHasUserControlledPlayback(true)

    console.log('Current audioState.isPlaying:', audioState.isPlaying)
    console.log('Audio paused state:', audio.paused)

    try {
      if (audioState.isPlaying) {
        console.log('Pausing audio')
        audio.pause()
      } else {
        console.log('Playing audio')
        // Reset if ended
        if (audio.ended) {
          audio.currentTime = 0
        }
        await audio.play()
      }
    } catch (error) {
      console.error('Error playing audio:', error)
      updateAudioState({ hasError: true })
    }
  }, [audioState.isPlaying, audioState.hasError, updateAudioState])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !audio.muted
    updateAudioState({ isMuted: audio.muted })
  }, [updateAudioState])

  // Don't render if no audio source
  if (!audioSrc) return null

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={audioSrc} loop preload="metadata" muted={audioState.isMuted} />

      {/* Floating controls */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-50 flex flex-col justify-end gap-2 p-4',
          className
        )}
      >
        {/* Volume control (optional) */}
        {showVolumeControl && (
          <Button
            onClick={toggleMute}
            size="sm"
            variant="secondary"
            className="pointer-events-auto h-8 w-8 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
            aria-label={audioState.isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {audioState.isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
          </Button>
        )}

        {/* Play/Pause button */}
        <Button
          onClick={togglePlayPause}
          size="lg"
          disabled={audioState.isLoading || audioState.hasError}
          className={cn(
            'pointer-events-auto h-12 w-12 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl sm:h-14 sm:w-14',
            audioState.isLoading && 'cursor-wait opacity-70',
            audioState.hasError && 'cursor-not-allowed opacity-50'
          )}
          aria-label={
            audioState.hasError
              ? 'Audio unavailable'
              : audioState.isLoading
                ? 'Loading audio...'
                : audioState.isPlaying
                  ? 'Pause music'
                  : 'Play music'
          }
        >
          {audioState.isLoading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent sm:h-6 sm:w-6" />
          ) : audioState.isPlaying ? (
            <Pause className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Play className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </Button>
      </div>
    </>
  )
}
