import BaseContainer from '@/shared/components/base-container'
import ScrollDownIcon from '@/shared/components/scroll-down-icon'
import React from 'react'
import SliderImageBackground from './slider-image-background'

const slides = [
  {
    id: 'slide-adat-1',
    image: '/static/tata-widya/adat-1.webp',
  },
  {
    id: 'slide-adat-5',
    image: '/static/tata-widya/adat-5.webp',
  },
  {
    id: 'slide-adat-7',
    image: '/static/tata-widya/adat-7.webp',
  },
  {
    id: 'slide-adat-8',
    image: '/static/tata-widya/adat-8.webp',
  },
  {
    id: 'slide-adat-9',
    image: '/static/tata-widya/adat-9.webp',
  },
]

export default function HeroSection() {
  return (
    <section className="relative h-full w-full">
      <SliderImageBackground slides={slides} />
      <BaseContainer className="relative z-10 flex min-h-dvh justify-between">
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
