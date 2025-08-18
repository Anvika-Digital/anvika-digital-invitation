import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function InvitationLayout({ children }: Props) {
  return <main className="relative h-full max-h-screen overflow-hidden">{children}</main>
}
