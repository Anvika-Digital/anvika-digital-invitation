import React from 'react'
import BaseContainer from '@/shared/components/base-container'
import Gallery from '@/shared/components/gallery'
import { Photo } from 'react-photo-album'

const photos: Photo[] = [
  {
    key: 'image-2',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 2',
  },
  {
    key: 'image-3',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 3',
  },
  {
    key: 'image-1',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 1',
  },
  {
    key: 'image-5',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 5',
  },
  {
    key: 'image-6',
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 6',
  },
  {
    key: 'image-4',
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 4',
  },
  {
    key: 'image-7',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 7',
  },
  {
    key: 'image-8',
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 8',
  },
  {
    key: 'image-9',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 9',
  },
  {
    key: 'image-10',
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 10',
  },
  {
    key: 'image-11',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 11',
  },
  {
    key: 'image-12',
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 12',
  },
  {
    key: 'image-13',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 13',
  },
  {
    key: 'image-16',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 16',
  },
  {
    key: 'image-17',
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 17',
  },
  {
    key: 'image-18',
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 18',
  },
]

export default function GallerySection() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0 bg-black/50" />
      <BaseContainer className="relative z-10 flex h-full w-full items-start">
        <div className="space-y-6 text-white">
          <h1 className="font-playfair text-center text-5xl leading-14 font-medium">Gallery</h1>
          <Gallery photos={photos} />
        </div>
      </BaseContainer>
    </section>
  )
}
