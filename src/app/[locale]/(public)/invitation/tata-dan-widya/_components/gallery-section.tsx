import React from 'react'
import BaseContainer from '@/shared/components/base-container'
import Gallery from '@/shared/components/gallery'
import { Photo } from 'react-photo-album'

const photos: Photo[] = [
  {
    key: 'image-1',
    src: '/static/tata-widya/adat-1.webp',
    width: 1200,
    height: 1800,
    alt: 'Foto Gus Tata dan Widya Baju Adat 1',
  },
  {
    key: 'image-2',
    src: '/static/tata-widya/adat-11.webp',
    width: 1920,
    height: 1280,
    alt: 'Foto Gus Tata dan Widya Baju Adat 2',
  },
  {
    key: 'image-3',
    src: '/static/tata-widya/adat-3.webp',
    width: 1920,
    height: 1280,
    alt: 'Foto Gus Tata dan Widya Baju Adat 3',
  },
  {
    key: 'image-4',
    src: '/static/tata-widya/adat-5.webp',
    width: 1200,
    height: 1800,
    alt: 'Foto Gus Tata dan Widya Baju Adat 4',
  },
  {
    key: 'image-5',
    src: '/static/tata-widya/adat-6.webp',
    width: 1200,
    height: 1800,
    alt: 'Foto Gus Tata dan Widya Baju Adat 5',
  },
  {
    key: 'image-6',
    src: '/static/tata-widya/adat-7.webp',
    width: 1200,
    height: 1800,
    alt: 'Foto Gus Tata dan Widya Baju Adat 6',
  },
  {
    key: 'image-7',
    src: '/static/tata-widya/adat-10.webp',
    width: 1920,
    height: 1280,
    alt: 'Foto Gus Tata dan Widya Baju Adat 7',
  },
  {
    key: 'image-8',
    src: '/static/tata-widya/adat-8.webp',
    width: 1200,
    height: 1800,
    alt: 'Foto Gus Tata dan Widya Baju Adat 8',
  },
  {
    key: 'image-9',
    src: '/static/tata-widya/adat-9.webp',
    width: 1200,
    height: 1800,
    alt: 'Foto Gus Tata dan Widya Baju Adat 9',
  },
]

export default function GallerySection() {
  return (
    <section className="relative -top-[1px] min-h-screen w-full">
      <div className="bg-foreground/50 absolute inset-0 z-0" />
      <BaseContainer className="relative z-10 flex h-full w-full items-start">
        <div className="space-y-6 text-white">
          <h1 className="font-playfair text-center text-5xl leading-14 font-medium">Gallery</h1>
          <Gallery photos={photos} />
        </div>
      </BaseContainer>
    </section>
  )
}
