'use client'

import { useState } from 'react'
import { Photo, RenderImageContext, RenderImageProps, RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Fullscreen } from 'yet-another-react-lightbox/plugins'
import { Download } from 'yet-another-react-lightbox/plugins'
import Image from 'next/image'

type GalleryProps = {
  photos: Photo[]
}

function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
      />
    </div>
  )
}

export default function Gallery({ photos }: GalleryProps) {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        rowConstraints={{ maxPhotos: 2 }}
        targetRowHeight={250}
        spacing={4}
        // render={{ image: renderNextImage }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Download]}
      />
    </>
  )
}
