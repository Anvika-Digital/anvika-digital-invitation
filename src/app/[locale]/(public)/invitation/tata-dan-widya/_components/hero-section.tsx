import BaseContainer from '@/shared/components/base-container'
import ScrollDownIcon from '@/shared/components/scroll-down-icon'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-blue-200">
      <BaseContainer className="flex h-full justify-between">
        <div className="flex flex-col gap-y-6">
          <h1 className="mt-auto text-white">
            The Wedding Of <br />
            <span className="text-5xl">
              Tata
              <br />
              &Widya
            </span>
          </h1>

          <p className="uppercase">18 September 2025</p>
        </div>
        <div className="mt-auto">
          <ScrollDownIcon />
        </div>
      </BaseContainer>
    </section>
  )
}
