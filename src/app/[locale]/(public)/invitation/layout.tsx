import { ReactNode } from 'react'
import { Playfair_Display, Inter, Source_Sans_3 } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

type Props = {
  children: ReactNode
}

export default function InvitationLayout({ children }: Props) {
  return (
    <main
      className={`${playfairDisplay.variable} ${sourceSans.variable} relative h-full max-h-screen overflow-hidden antialiased`}
    >
      {children}
    </main>
  )
}
