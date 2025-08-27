'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'
import { AnimatePresence, motion } from 'motion/react'

type WelcomeModalProps = {
  guestName: string
}

export default function WelcomeModal({ guestName }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="absolute inset-0 z-50 h-full w-full overflow-hidden bg-white"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          key="welcome-message"
        >
          <div className="relative h-full w-full">
            {/* Image Container */}
            <StaticImageBackground imageUrl="https://picsum.photos/id/122/1200/1500" overlay />

            {/* Welcome Message */}
            <BaseContainer className="relative z-20 flex h-full flex-col justify-between text-white">
              <div className="font-playfair space-y-2 text-center">
                <h2 className="text-xl">The Wedding Of</h2>
                <h1 className="text-5xl font-medium">Gus Tata & Dayu Widya</h1>
              </div>

              <div className="mt-auto space-y-4 text-center text-white">
                <p className="font-source-sans">Kepada Yth.</p>
                <p className="mb-6 text-3xl">{guestName}</p>
                <Button onClick={() => setIsOpen(false)} size="lg">
                  Buka Undangan
                </Button>
              </div>
            </BaseContainer>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
