'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

interface SwiperSlideshowProps {
  lazy?: boolean
  slides?: Array<{
    id: string
    image: string
  }>
  autoplayDelay?: number
  overlayOpacity?: string
}

const defaultSlides = [
  { id: '1', image: '/static/slide-1.jpg' },
  { id: '2', image: '/static/slide-2.jpg' },
  { id: '3', image: '/static/slide-3.jpg' },
  { id: '4', image: '/static/slide-4.jpg' },
]
export default function SwiperSlideshow({
  lazy = false,
  slides = defaultSlides,
  autoplayDelay = 3000,
  overlayOpacity = 'opacity-30',
}: SwiperSlideshowProps) {
  const swiperRef = useRef<SwiperRef>(null)

  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        speed={1500}
        className="h-full w-full [&_.swiper-slide_img]:scale-105 [&_.swiper-slide-active_img]:scale-100"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 h-full w-full">
                <img
                  loading={lazy ? 'lazy' : 'eager'}
                  src={slide.image}
                  alt="Background slide"
                  className="h-full w-full object-cover object-center transition-transform duration-[5000ms] ease-in"
                />
              </div>
              <div className={`bg-foreground absolute inset-0 ${overlayOpacity}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
