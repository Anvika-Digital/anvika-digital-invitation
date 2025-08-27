import { ReactNode } from 'react'
import { Playfair_Display, Source_Sans_3, Noto_Serif_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

const notoSerif = Noto_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
})

type Props = {
  children: ReactNode
}

export default function InvitationLayout({ children }: Props) {
  return (
    <main
      className={`${playfairDisplay.variable} ${sourceSans.variable} ${notoSerif.variable} font-source-sans relative h-full max-h-screen overflow-hidden antialiased`}
    >
      {children}
    </main>
  )
}
