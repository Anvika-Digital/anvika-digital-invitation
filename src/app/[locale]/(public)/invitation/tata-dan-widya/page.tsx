import { Toaster } from '@/components/ui/sonner'
import BaseContainer from '@/shared/components/base-container'
import CeremonyLocationSection from './_components/ceremony-location-section'
import CountdownSection from './_components/countdown-section'
import DateSection from './_components/date-section'
import GallerySection from './_components/gallery-section'
import GiftSection from './_components/gift-section'
import GroomSection from './_components/groom-section'
import HeroSection from './_components/hero-section'
import LoveStorySection from './_components/love-story-section'
import RSVPSection from './_components/rsvp-section'
import StaticImageBackground from './_components/static-image-background'
import WelcomeModal from './_components/welcome-modal'
import WishesSection from './_components/wishes-section'
import FooterSection from './_components/footer-section'

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

      <section className="relative grid grid-cols-1 lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_500px]">
        {/* Left Content for larger screen */}
        <div className="relative hidden h-full w-full lg:block">
          <StaticImageBackground imageUrl="/static/slide-4.jpg" overlay overlayClass="opacity-25" />
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
        <div className="relative h-screen w-full">
          <StaticImageBackground imageUrl="https://picsum.photos/id/122/1200/1500" />
          <div className="relative z-10 h-full max-h-screen w-full overflow-y-auto">
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
