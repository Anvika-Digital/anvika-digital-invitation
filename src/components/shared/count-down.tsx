'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface CountdownTimerProps {
  targetDate: Date | string
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDate).getTime()
    const now = new Date().getTime()
    const difference = target - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Calculate initial time left
    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0')
  }

  return (
    <article className="text-white">
      <h1 className="mb-4 font-bold uppercase">Counting Down to the Day</h1>
      <div
        className={cn('grid grid-cols-4 gap-4 font-mono text-2xl font-bold md:text-4xl', className)}
      >
        <div className="text-center">
          <div className="text-4xl md:text-3xl">{formatNumber(timeLeft.days)}</div>
          <div className="text-muted-foreground mt-2 text-sm md:text-base">HARI</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-3xl">{formatNumber(timeLeft.hours)}</div>
          <div className="text-muted-foreground mt-2 text-sm md:text-base">BULAN</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-3xl">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-muted-foreground mt-2 text-sm md:text-base">MENIT</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-3xl">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-muted-foreground mt-2 text-sm md:text-base">DETIK</div>
        </div>
      </div>
    </article>
  )
}
