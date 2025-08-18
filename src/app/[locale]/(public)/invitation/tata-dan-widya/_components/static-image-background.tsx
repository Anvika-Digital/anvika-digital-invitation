import React from 'react'

type StaticImageBackgroundProps = {
  imageUrl: string
}

export default function StaticImageBackground({ imageUrl }: StaticImageBackgroundProps) {
  return (
    <div role="modal" className="pointer-none absolute inset-0 z-0 h-full w-full">
      <img src={imageUrl} alt="" className="h-screen w-full object-cover object-center" />
    </div>
  )
}
