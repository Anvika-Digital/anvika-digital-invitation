import BaseContainer from '@/shared/components/base-container'
import WishesForm from './wishes-form'
import WishesMessageBox from './wishes-message-box'

export default function WishesSection() {
  return (
    <section className="relative -top-[1px] min-h-dvh w-full">
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <BaseContainer className="relative z-10 space-y-8">
        <div className="space-y-4 text-white">
          <h1 className="font-playfair text-5xl font-medium">Ucapan & Doa</h1>
          <p className="font-medium">Kirimkan ucapan & doa untuk kami</p>
        </div>

        <WishesForm />
        <div className="px-4">
          <WishesMessageBox />
        </div>
      </BaseContainer>
    </section>
  )
}
