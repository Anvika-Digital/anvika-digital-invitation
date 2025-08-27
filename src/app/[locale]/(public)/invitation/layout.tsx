import { ReactNode } from 'react'
import { Playfair_Display, Inter } from 'next/font/google'

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

type Props = {
  children: ReactNode
}

export default function InvitationLayout({ children }: Props) {
  return (
    <main
      className={`${playfairDisplay.variable} ${inter.variable} relative h-full max-h-screen overflow-hidden antialiased`}
    >
      {children}
    </main>
  )
}
