import React from 'react'
import BaseContainer from '@/shared/components/base-container'
import CountdownTimer from '@/components/shared/count-down'
import SliderImageBackground from './slider-image-background'

const slides = [
  {
    id: 'slide-casual-1',
    image: '/static/tata-widya/casual-2.webp',
  },
  {
    id: 'slide-casual-2',
    image: '/static/tata-widya/casual-3.webp',
  },
  {
    id: 'slide-casual-3',
    image: '/static/tata-widya/casual-5.webp',
  },
  {
    id: 'slide-casual-4',
    image: '/static/tata-widya/casual-7.webp',
  },
]

export default function CountdownSection() {
  return (
    <section className="relative -top-[1px] h-full w-full">
      <SliderImageBackground slides={slides} overlayOpacity="opacity-50" />
      <BaseContainer className="relative z-10 flex min-h-dvh w-full items-center justify-start">
        <div className="space-y-6 text-white">
          <h1 className="font-noto-serif text-8xl font-medium uppercase opacity-50">
            Save <br />
            The Date
          </h1>
          <CountdownTimer targetDate="2025-09-18T00:00:00Z" />
        </div>
      </BaseContainer>
    </section>
  )
}
