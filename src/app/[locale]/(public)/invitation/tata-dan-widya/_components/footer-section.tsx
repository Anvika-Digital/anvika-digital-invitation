import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'

export default function FooterSection() {
  return (
    <section className="relative -top-[1px] h-screen w-full">
      <StaticImageBackground imageUrl="https://picsum.photos/id/100/1200/1500" />
      <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-transparent from-0% via-[var(--foreground)] via-50% to-[var(--foreground)] to-100%" />
      <BaseContainer className="relative z-20 flex h-full w-full items-end">
        <footer className="w-full space-y-12 text-white">
          <div className="space-y-4 text-center">
            <p className="text-sm">
              Merupakan suatu kebahagiaan bagi kami sekeluarga, apabila Bapak/ Ibu/ Saudara/i
              berkenan hadir untuk memberikan doa restu.
              <br />
              <br />
              Atas kehadirannya kami ucapkan terima kasih.
            </p>
            <p className="font-bold">See you on our big day!</p>
            <h1 className="text-2xl font-bold">Gus Tata & Dayu Widya</h1>
          </div>

          <div className="flex flex-col items-center gap-y-4 text-center text-white">
            <p>Powered by</p>
            <p>Anvika Digital Invitation</p>
          </div>
        </footer>
      </BaseContainer>
    </section>
  )
}
