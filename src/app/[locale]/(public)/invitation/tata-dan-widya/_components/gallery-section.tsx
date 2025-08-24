import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'
import Gallery from '@/shared/components/gallery'
import { Photo } from 'react-photo-album'

const photos: Photo[] = [
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 2',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 3',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 1',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 5',
  },
  {
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 6',
  },
  {
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 4',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 7',
  },
  {
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 8',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 9',
  },
  {
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 10',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 11',
  },
  {
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 12',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 13',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 16',
  },
  {
    src: 'https://placehold.co/900x600',
    width: 900,
    height: 600,
    alt: 'Image 17',
  },
  {
    src: 'https://placehold.co/600x900',
    width: 600,
    height: 900,
    alt: 'Image 18',
  },
]

export default function GallerySection() {
  return (
    <section className="relative min-h-screen w-full">
      {/* <StaticImageBackground imageUrl="https://picsum.photos/id/98/1200/1500" /> */}
      <BaseContainer className="relative z-10 flex h-full w-full items-start">
        <div className="space-y-6 text-white">
          <h1 className="text-center text-5xl leading-14 font-bold">Gallery</h1>
          <Gallery photos={photos} />
        </div>
      </BaseContainer>
    </section>
  )
}
