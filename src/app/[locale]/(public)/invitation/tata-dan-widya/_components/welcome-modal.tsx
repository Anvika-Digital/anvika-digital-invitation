'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import StaticImageBackground from './static-image-background'

type WelcomeModalProps = {
  guestName: string
}

export default function WelcomeModal({ guestName }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(true)

  return <div>{isOpen && WelcomeModalContent({ guestName, setIsOpen })}</div>
}

function WelcomeModalContent({
  guestName,
  setIsOpen,
}: {
  guestName: string
  setIsOpen: (open: boolean) => void
}) {
  return (
    <section className="absolute inset-0 z-50 h-full w-full overflow-hidden bg-white">
      <div className="relative h-full w-full">
        {/* Image Overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-55" />

        {/* Image Container */}
        <StaticImageBackground imageUrl="https://picsum.photos/id/122/1200/1500" />

        {/* Welcome Message */}
        <div className="relative z-20 flex h-full w-full flex-col items-center px-6 py-20">
          <h1 className="text-center text-sm text-white">
            The Wedding Of <br />
            <span className="text-5xl">Tata & Widya</span>
          </h1>

          <div className="mt-auto space-y-4 text-center text-white">
            <p className="text-sm">Kepada Yth.</p>
            <p className="mb-6 text-2xl">{guestName}</p>
            <Button onClick={() => setIsOpen(false)} size="lg">
              Buka Undangan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
