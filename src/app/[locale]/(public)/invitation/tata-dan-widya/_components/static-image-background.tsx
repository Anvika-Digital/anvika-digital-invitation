import { cn } from '@/lib/utils'
import React from 'react'

type StaticImageBackgroundProps = {
  imageUrl: string
  overlay?: boolean
  overlayClass?: string
}

export default function StaticImageBackground({
  imageUrl,
  overlay = false,
  overlayClass,
}: StaticImageBackgroundProps) {
  return (
    <>
      <div role="modal" className="pointer-none bg-foreground absolute inset-0 z-0 h-full w-full">
        <img
          src={imageUrl}
          alt=""
          className="h-full min-h-screen w-full object-cover object-center"
        />
      </div>

      {overlay && (
        <div
          className={cn(
            'pointer-none absolute inset-0 z-10 h-full w-full bg-black opacity-50',
            overlayClass
          )}
        />
      )}
    </>
  )
}
