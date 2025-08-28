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
          className="absolute inset-0 z-[60] h-dvh w-full overflow-hidden bg-white"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          key="welcome-message"
        >
          <div className="relative h-full w-full">
            {/* Image Container */}
            <StaticImageBackground imageUrl="/static/tata-widya/adat-7.webp" overlay priority />

            {/* Welcome Message */}
            <BaseContainer className="relative z-20 flex h-full flex-col justify-between text-white">
              <div className="font-playfair space-y-2 text-center">
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
                  className="text-xl"
                >
                  The Wedding Of
                </motion.h2>
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
                  className="text-5xl font-medium"
                >
                  Gus Tata & <br /> Dayu Widya
                </motion.h1>
              </div>

              <div className="mt-auto space-y-4 text-center text-white">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
                  className="font-source-sans"
                >
                  Kepada Yth.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
                  className="mb-6 text-3xl"
                >
                  {guestName}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 2 }}
                >
                  <Button onClick={() => setIsOpen(false)} size="lg">
                    Buka Undangan
                  </Button>
                </motion.div>
              </div>
            </BaseContainer>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
