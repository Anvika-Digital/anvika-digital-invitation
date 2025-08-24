import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'

export default function DateSection() {
  return (
    <section className="relative -top-[1px] h-screen w-full">
      <StaticImageBackground imageUrl="https://picsum.photos/id/98/1200/1500" />
      <BaseContainer className="relative z-10 flex h-full w-full items-end">
        <div className="space-y-6 text-white">
          <h1 className="text-8xl leading-28 font-bold uppercase opacity-50">
            18 <br />
            Sep <br />
            2025
          </h1>
          <p>
            Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih,
            Modamānau sve grhe
          </p>
          <p>Rgveda : X.85.42</p>
        </div>
      </BaseContainer>
    </section>
  )
}
