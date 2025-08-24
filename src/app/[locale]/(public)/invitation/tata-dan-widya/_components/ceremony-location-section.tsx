import React from 'react'
import BaseContainer from '@/shared/components/base-container'
import SliderImageBackground from './slider-image-background'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function CeremonyLocationSection() {
  return (
    <section className="relative -top-[1px] h-screen w-full">
      <SliderImageBackground />
      <BaseContainer className="relative z-10 flex h-full w-full items-center">
        <div className="relative w-full space-y-4 px-6 py-8 text-white backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-black opacity-10" />
          <h1 className="mb-4 text-3xl">
            Resepsi <br />
            Pernikahan
          </h1>
          <p className="flex items-center gap-x-2 font-bold">
            <span>
              <Calendar size="16" className="mb-0" />
            </span>
            18 September 2025
          </p>
          <p className="flex items-center gap-x-2">
            <span>
              <Clock size="16" className="mb-0" />
            </span>
            14.00 WITA - selesai
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-x-2">
              <span>
                <MapPin size="16" className="mb-0" />
              </span>
              Griya Mas Intaran
            </p>
            <p className="text-sm">
              Jl. Batu karu, Br. Sandan Dauh Yeh, Desa Sesandan, Kec. Tabanan.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-2 rounded-none bg-white/10 text-white uppercase hover:bg-white/30 hover:text-white"
          >
            <Link href="https://maps.app.goo.gl/Ra7ABqCb6C8w7ZAV8?g_st=ipc" target="_blank">
              Lihat Lokasi
            </Link>
          </Button>
        </div>
      </BaseContainer>
    </section>
  )
}
