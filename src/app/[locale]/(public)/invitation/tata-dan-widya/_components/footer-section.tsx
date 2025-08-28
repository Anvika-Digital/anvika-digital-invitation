import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'

export default function FooterSection() {
  return (
    <section className="relative -top-[1px] h-screen w-full">
      <StaticImageBackground imageUrl="/static/tata-widya/adat-6.webp" />
      <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-0% via-[var(--foreground)]/30 via-20% to-[var(--foreground)] to-100%" />
      <BaseContainer className="relative z-20 flex h-full w-full items-end">
        <footer className="w-full space-y-16 text-white">
          <div className="space-y-4 text-center">
            <p className="text-sm">
              Merupakan suatu kebahagiaan bagi kami sekeluarga, apabila Bapak/ Ibu/ Saudara/i
              berkenan hadir untuk memberikan doa restu.
              <br />
              <br />
              Atas kehadirannya kami ucapkan terima kasih.
            </p>
            <p className="font-bold">See you on our big day!</p>
            <h1 className="font-playfair text-3xl font-medium">Gus Tata & Dayu Widya</h1>
          </div>

          <div className="flex flex-col items-center gap-y-2 text-center text-white">
            <p>Powered by</p>
            <img
              src="/static/anvika-logo.svg"
              alt="Anvika Digital Invitation"
              width={125}
              height={35}
              className="antialiased"
            />
          </div>
        </footer>
      </BaseContainer>
    </section>
  )
}
