import BaseContainer from '@/shared/components/base-container'
import DateSection from './_components/date-section'
import HeroSection from './_components/hero-section'
import StaticImageBackground from './_components/static-image-background'
import WelcomeModal from './_components/welcome-modal'
import GroomSection from './_components/groom-section'
import CountdownSection from './_components/countdown-section'
import CeremonyLocationSection from './_components/ceremony-location-section'
import RSVPSection from './_components/rsvp-section'
import GallerySection from './_components/gallery-section'

export default function InvitationPage() {
  return (
    <>
      {/* <WelcomeModal guestName="John Doe" /> */}
      <section className="relative grid grid-cols-1 sm:grid-cols-[1fr_430px]">
        {/* Left Content for larger screen */}
        <div className="relative hidden h-full w-full lg:block">
          <StaticImageBackground imageUrl="/static/slide-4.jpg" overlay overlayClass="opacity-25" />
          <BaseContainer className="relative z-10 flex h-full w-full items-end justify-start text-white">
            <div className="space-y-2 text-white">
              <h2 className="text-xl uppercase">Undangan Pernikahan</h2>
              <h1 className="text-7xl">
                Gus Tata & <br />
                Widya
              </h1>
              <h3 className="text-lg font-bold uppercase">18 September 2025</h3>
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
          </div>
        </div>
      </section>
    </>
  )
}
