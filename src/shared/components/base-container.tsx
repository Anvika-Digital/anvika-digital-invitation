import { cn } from '@/lib/utils'
import React from 'react'

type BaseContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function BaseContainer({ children, className }: BaseContainerProps) {
  return <div className={cn(`container mx-auto px-6 py-20`, className)}>{children}</div>
}
