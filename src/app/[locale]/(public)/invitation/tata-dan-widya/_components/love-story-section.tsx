import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'

export default function LoveStorySection() {
  return (
    <section className="relative min-h-dvh w-full">
      <StaticImageBackground
        imageUrl="/static/tata-widya/adat-1.webp"
        overlay
        overlayClass="opacity-60"
      />
      <BaseContainer className="relative z-10 flex h-full w-full items-start">
        <div className="space-y-8 text-white">
          <h1 className="font-playfair text-5xl font-medium">Kisah Cinta</h1>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold">Awal Perkenalan</h2>
            <p className="text-sm">
              Semua bermula di Instagram. Saling mengikuti tanpa saling mengenal: Dayu Widya di
              Tangerang, Gus Tata di Denpasar. Pada 26 Mei 2019, Gus Tata menulis,{' '}
              <span className="font-medium italic">“Halo, boleh kenalan ga? </span>😁”. Obrolan
              singkat lewat begitu saja, menyisakan dua akun yang saling mengikuti dari kejauhan.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold">Pendekatan</h2>
            <p className="text-sm">
              Empat tahun kemudian, 30 April 2023, Gus Tata membalas notes Instagram Dayu Widya.
              Berbeda dari 2019, percakapan kali ini hangat dan berlanjut.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold">Pertemuan</h2>
            <p className="text-sm">
              Pada 23 September 2023, Dayu Widya terbang dari Tangerang ke Bali. Mereka bertemu
              lagi, bukan pertama, namun tetap terasa mendebarkan. Siapa sangka, di parkiran Iga
              Bakar Kayana, hubungan itu dimulai.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold">Pernikahan</h2>
            <p className="text-sm">
              Tak perlu waktu lama, untuk merasa yakin melangkah bersama, Februari 2024, Dayu Widya
              memutuskan untuk resign dan pulang ke Bali. Sejak itu mereka berdampingan, tanpa beda
              waktu, tanpa jarak, tanpa rindu yang ditahan. Kini, 2025, kisah mereka masuk babak
              baru. Awal dari kisah selamanya.
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>
  )
}
