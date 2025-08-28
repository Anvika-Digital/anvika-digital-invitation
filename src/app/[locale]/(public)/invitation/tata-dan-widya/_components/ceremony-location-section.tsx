import { Button } from '@/components/ui/button'
import BaseContainer from '@/shared/components/base-container'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import StaticImageBackground from './static-image-background'

export default function CeremonyLocationSection() {
  return (
    <section className="relative -top-[1px] h-full w-full">
      <StaticImageBackground imageUrl="/static/tata-widya/casual-10.webp" overlay />
      <BaseContainer className="relative z-10 flex min-h-dvh w-full items-center">
        <div className="relative w-full space-y-4 px-6 py-8 text-white backdrop-blur-sm">
          <div className="bg-foreground pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-10" />
          <h1 className="font-playfair mb-4 text-3xl">Resepsi Pernikahan</h1>
          <p className="flex items-center gap-x-2 font-bold">
            <span>
              <Calendar size="16" className="mb-0" />
            </span>
            18 September 2025
          </p>
          <p className="flex items-center gap-x-2">
            <span>
              <Clock size="16" className="mb-0" />
            </span>
            14.00 WITA - selesai
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-x-2">
              <span>
                <MapPin size="16" className="mb-0" />
              </span>
              Griya Mas Intaran
            </p>
            <p className="text-sm">
              Jl. Batu karu, Br. Sandan Dauh Yeh, Desa Sesandan, Kec. Tabanan.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-2 w-full rounded-none bg-white/10 text-white uppercase hover:bg-white/30 hover:text-white"
          >
            <Link href="https://maps.app.goo.gl/Ti5oZyxMPWNukwVS9?g_st=ipc" target="_blank">
              Lihat Lokasi
            </Link>
          </Button>
        </div>
      </BaseContainer>
    </section>
  )
}
