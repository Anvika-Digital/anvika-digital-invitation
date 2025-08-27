import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GroomSection() {
  return (
    <section>
      <div className="relative -top-[1px] h-screen w-full bg-blue-200">
        <StaticImageBackground imageUrl="https://picsum.photos/id/10/1200/1500" overlay />
        <BaseContainer className="relative z-10 flex h-full w-full items-end justify-start">
          <div className="space-y-3 text-white">
            <h1 className="font-noto-serif mb-4 font-bold uppercase">The Groom</h1>
            <h2 className="font-noto-serif text-3xl font-bold">
              drg. Ida Bagus Septian Dwi Masta, S.K.G
            </h2>
            <h3 className="font-medium uppercase">Putra Kedua Dari</h3>
            <p>
              Bapak Ida Bagus Made Raka Karyana, S.T &<br />
              Ibu Ida Ayu Kade Agung Padmawati, S.H
            </p>

            <Button variant="link" size="sm" className="px-0 text-white" asChild>
              <Link
                href={`https://www.instagram.com/@ibseptiandwimasta`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </Link>
            </Button>
          </div>
        </BaseContainer>
      </div>

      <div className="relative -top-[1px] h-screen w-full bg-red-200">
        <StaticImageBackground imageUrl="https://picsum.photos/id/11/1200/1500" overlay />
        <BaseContainer className="relative z-10 flex h-full w-full items-end justify-start">
          <div className="space-y-3 text-white">
            <h1 className="font-noto-serif mb-4 font-bold uppercase">The Bride</h1>
            <h2 className="font-noto-serif text-3xl font-bold">Ida Ayu Kade Widya Pradnyaswari</h2>
            <h3 className="font-medium uppercase">Putri Kedua Dari</h3>
            <p>
              Bapak Alm. Ida Bagus Ngurah Darsana &<br />
              Ibu Ida Ayu Putu Widariani
            </p>

            <Button variant="link" size="sm" className="px-0 text-white" asChild>
              <Link href={`https://www.instagram.com/@iawidyapradnya`} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </Link>
            </Button>
          </div>
        </BaseContainer>
      </div>
    </section>
  )
}
