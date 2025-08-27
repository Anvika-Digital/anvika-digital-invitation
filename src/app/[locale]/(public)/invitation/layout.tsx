import { ReactNode } from 'react'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'

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

type Props = {
  children: ReactNode
}

export default function InvitationLayout({ children }: Props) {
  return (
    <main
      className={`${playfairDisplay.variable} ${sourceSans.variable} font-source-sans relative h-full max-h-screen overflow-hidden antialiased`}
    >
      {children}
    </main>
  )
}
