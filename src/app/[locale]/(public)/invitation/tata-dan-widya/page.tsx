import HeroSection from './_components/hero-section'
import StaticImageBackground from './_components/static-image-background'
import WelcomeModal from './_components/welcome-modal'

export default function InvitationPage() {
  return (
    <>
      {/* <WelcomeModal guestName="John Doe" /> */}
      <section className="relative grid grid-cols-1 lg:grid-cols-[1fr_430px]">
        {/* Left Content for larger screen */}
        <div className="hidden h-full w-full items-center justify-center bg-gray-200 lg:flex">
          Left Content
        </div>

        {/* Right Content */}
        <div className="relative h-screen w-full">
          <StaticImageBackground imageUrl="https://picsum.photos/id/122/1200/1500" />
          <div className="relative z-10 h-full max-h-screen w-full overflow-y-auto">
            <div className="flex h-[2000px] flex-col text-white">
              <HeroSection />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
