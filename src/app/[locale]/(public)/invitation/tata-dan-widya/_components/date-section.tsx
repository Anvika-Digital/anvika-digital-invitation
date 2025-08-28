import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'

export default function DateSection() {
  return (
    <section className="relative -top-[1px] h-full w-full">
      <StaticImageBackground imageUrl="/static/tata-widya/adat-6.webp" overlay priority />
      <BaseContainer className="relative z-10 flex min-h-dvh w-full items-end">
        <div className="space-y-6 text-white">
          <h1 className="font-noto-serif text-8xl font-bold uppercase opacity-50">
            18 <br />
            Sep <br />
            2025
          </h1>
          <p className="font-medium">
            Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair naptrbhih,
            Modamānau sve grhe
          </p>
          <p className="text-sm italic">
            Wahai pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah terpisahkan.
            Semoga kalian mencapai hidup penuh kebahagiaan, tinggal di rumah yang penuh kegembiraan
            bersama seluruh keturunanmu.
          </p>
          <p className="text-sm font-bold text-white/70 uppercase">Rgveda : X.85.42</p>
        </div>
      </BaseContainer>
    </section>
  )
}
