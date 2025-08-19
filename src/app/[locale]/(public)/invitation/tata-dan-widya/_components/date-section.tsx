import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'

export default function DateSection() {
  return (
    <section className="relative -top-0.5 h-screen w-full">
      <StaticImageBackground imageUrl="https://picsum.photos/id/98/1200/1500" />
      <BaseContainer className="relative z-10 flex h-full w-full items-end">
        <div className="space-y-6 text-white">
          <h1 className="text-5xl leading-14 font-bold opacity-50">
            18 <br />
            September <br />
            2025
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut animi tempore, optio vitae
            eius nulla necessitatibus nam soluta eos magni reprehenderit dignissimos dolore deserunt
            possimus ducimus! Vel quaerat recusandae ullam.
          </p>
        </div>
      </BaseContainer>
    </section>
  )
}
