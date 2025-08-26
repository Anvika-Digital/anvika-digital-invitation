import { cn } from '@/lib/utils'
import React from 'react'

type BaseContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function BaseContainer({ children, className }: BaseContainerProps) {
  return (
    <div className={cn(`container mx-auto max-w-xl px-4 py-16 xl:px-6`, className)}>{children}</div>
  )
}
