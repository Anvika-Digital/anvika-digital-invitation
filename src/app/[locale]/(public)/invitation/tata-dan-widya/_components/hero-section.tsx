import BaseContainer from '@/shared/components/base-container'
import ScrollDownIcon from '@/shared/components/scroll-down-icon'
import React from 'react'
import SliderImageBackground from './slider-image-background'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      <SliderImageBackground />
      <BaseContainer className="relative z-10 flex h-full justify-between">
        <div className="flex flex-col gap-y-6 text-white">
          <h1 className="font-playfair mt-auto">
            <span className="block text-lg">The Wedding Of </span>
            <span className="text-5xl font-medium">
              Gus Tata & <br /> Dayu Widya
            </span>
          </h1>
          <p className="font-medium uppercase">18 September 2025</p>
        </div>
        <div className="mt-auto">
          <ScrollDownIcon />
        </div>
      </BaseContainer>
    </section>
  )
}
