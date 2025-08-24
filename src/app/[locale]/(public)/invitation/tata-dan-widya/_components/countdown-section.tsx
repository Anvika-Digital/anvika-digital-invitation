import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'
import CountdownTimer from '@/components/shared/count-down'

export default function CountdownSection() {
  return (
    <section className="relative -top-[1px] h-screen w-full">
      <StaticImageBackground imageUrl="https://picsum.photos/id/98/1200/1500" overlay />
      <BaseContainer className="relative z-10 flex h-full w-full items-center justify-start">
        <div className="space-y-6 text-white">
          <h1 className="text-8xl uppercase opacity-50">Save The Date</h1>
          <CountdownTimer targetDate="2025-09-18T00:00:00Z" />
        </div>
      </BaseContainer>
    </section>
  )
}
