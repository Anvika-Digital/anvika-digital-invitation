import FloatingAudioPlayer from '@/components/shared/floating-audio-player'
import { Toaster } from '@/components/ui/sonner'
import BaseContainer from '@/shared/components/base-container'
import { Metadata } from 'next'
import CeremonyLocationSection from './_components/ceremony-location-section'
import CountdownSection from './_components/countdown-section'
import DateSection from './_components/date-section'
import FooterSection from './_components/footer-section'
import GallerySection from './_components/gallery-section'
import GiftSection from './_components/gift-section'
import GroomSection from './_components/groom-section'
import HeroSection from './_components/hero-section'
import LoveStorySection from './_components/love-story-section'
import RSVPSection from './_components/rsvp-section'
import StaticImageBackground from './_components/static-image-background'
import WelcomeModal from './_components/welcome-modal'
import WishesSection from './_components/wishes-section'

export const metadata: Metadata = {
  title: 'Anvika | Gus Tata & Dayu Widya - 18 September 2025',
  description:
    'Kami dengan penuh kebahagiaan mengundang Anda untuk hadir dalam acara pernikahan Ida Bagus Septian Dwi Masta (Gus Tata) dan Ida Ayu Kade Widya Pradnyaswari (Dayu Widya) pada 18 September 2025. Saksikan momen bahagia kami bersama keluarga dan sahabat tercinta.',
  keywords: [
    'undangan pernikahan',
    'wedding invitation',
    'Gus Tata Dayu Widya',
    'Ida Bagus Septian Dwi Masta',
    'Ida Ayu Kade Widya Pradnyaswari',
    'pernikahan bali',
    'september 2025',
    'digital invitation',
    'anvika digital',
  ],
  authors: [{ name: 'Anvika Digital Invitation' }],
  creator: 'Anvika Digital Invitation',
  publisher: 'Anvika Digital Invitation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Wedding',
  classification: 'Wedding Invitation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    title: 'Undangan Pernikahan Gus Tata & Dayu Widya - 18 September 2025',
    description:
      'Kami dengan penuh kebahagiaan mengundang Anda untuk hadir dalam acara pernikahan Ida Bagus Septian Dwi Masta (Gus Tata) dan Ida Ayu Kade Widya Pradnyaswari (Dayu Widya) pada 18 September 2025.',
    siteName: 'Anvika Digital Invitation',
    images: [
      {
        url: '/static/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Undangan Pernikahan Gus Tata & Dayu Widya',
        type: 'image/jpeg',
      },
      {
        url: '/static/slide-4.jpg',
        width: 800,
        height: 600,
        alt: 'Wedding Photo Gus Tata & Dayu Widya',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Undangan Pernikahan Gus Tata & Dayu Widya - 18 September 2025',
    description:
      'Kami mengundang Anda dalam acara pernikahan Gus Tata & Dayu Widya pada 18 September 2025. Saksikan momen bahagia kami!',
    images: ['/static/og-image.jpg'],
    creator: '@anvika_digital',
    site: '@anvika_digital',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  alternates: {
    canonical: '/invitation/tata-dan-widya',
    languages: {
      'id-ID': '/id/invitation/tata-dan-widya',
      'en-US': '/en/invitation/tata-dan-widya',
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Gus Tata & Dayu Widya Wedding',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
}

interface SearchParams {
  to?: string
  disable?: string
}

export default async function InvitationPage({ searchParams }: { searchParams: SearchParams }) {
  const search = await searchParams
  const searchQuery = search.to ? decodeURIComponent(search.to) : 'John Doe'
  const disableWelcomeModal = search.disable === 'true'

  return (
    <>
      {disableWelcomeModal ? null : <WelcomeModal guestName={searchQuery} />}

      <section className="font-source-sans relative grid grid-cols-1 lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_500px]">
        {/* Left Content for larger screen */}
        <div className="relative hidden h-full w-full lg:block">
          <StaticImageBackground
            imageUrl="/static/tata-widya/adat-10.webp"
            overlay
            overlayClass="opacity-25"
          />
          <BaseContainer className="relative z-10 flex h-full w-full max-w-full items-end justify-start text-white">
            <div className="space-y-2 text-white">
              <h2 className="font-playfair text-xl font-medium uppercase">Undangan Pernikahan</h2>
              <h1 className="font-playfair mb-6 text-7xl">
                Gus Tata & <br />
                Dayu Widya
              </h1>
              <h3 className="font-source-sans text-2xl font-medium uppercase">18 September 2025</h3>
            </div>
          </BaseContainer>
        </div>
        {/* Right Content */}
        <div className="relative">
          <StaticImageBackground
            imageUrl="/static/tata-widya/adat-2.webp"
            overlay
            overlayClass="opacity-10"
          />
          <FloatingAudioPlayer autoPlay audioSrc="/music/awal-kisah-selamanya.mp3" />
          <div className="relative z-10 h-full max-h-dvh w-full overflow-y-auto">
            <HeroSection />
            <DateSection />
            <GroomSection />
            <CountdownSection />
            <CeremonyLocationSection />
            <RSVPSection />
            <GallerySection />
            <LoveStorySection />
            <GiftSection />
            <WishesSection />
            <FooterSection />
          </div>
        </div>
        <Toaster />
      </section>
    </>
  )
}
