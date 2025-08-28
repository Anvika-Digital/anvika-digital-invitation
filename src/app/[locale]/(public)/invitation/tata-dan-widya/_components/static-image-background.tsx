import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

type StaticImageBackgroundProps = {
  priority?: boolean
  lazy?: boolean
  imageUrl: string
  overlay?: boolean
  overlayClass?: string
}

export default function StaticImageBackground({
  priority = false,
  imageUrl,
  lazy = true,
  overlay = false,
  overlayClass,
}: StaticImageBackgroundProps) {
  const loading = () => {
    if (priority) return undefined
    return lazy ? 'lazy' : 'eager'
  }

  return (
    <>
      <div role="modal" className="pointer-none bg-foreground absolute inset-0 z-0 h-full w-full">
        <Image
          priority={priority}
          loading={loading()}
          src={imageUrl}
          alt=""
          width={1200}
          height={1800}
          className="h-full min-h-dvh w-full object-cover object-bottom"
        />
      </div>

      {overlay && (
        <div
          className={cn(
            'pointer-none bg-foreground absolute inset-0 z-10 h-full w-full opacity-50',
            overlayClass
          )}
        />
      )}
    </>
  )
}
