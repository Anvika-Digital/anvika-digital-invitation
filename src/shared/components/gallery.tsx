'use client'

import { useState } from 'react'
import { Photo, RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'
import Lightbox from 'yet-another-react-lightbox'
import { Download, Fullscreen } from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'

type GalleryProps = {
  photos: Photo[]
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
