'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CreditCard, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

type BankCardProps = {
  bankName: string
  cardNumber: string
  cardHolderName: string
}

export default function BankCard({ bankName, cardNumber, cardHolderName }: BankCardProps) {
  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText(cardNumber)

    toast.success('Nomor rekening berhasil disalin', {})
  }

  return (
    <Card className="relative overflow-hidden border-0 bg-white/10 shadow-2xl backdrop-blur-md">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 rounded-lg border border-white/20 bg-gradient-to-br from-white/20 to-white/5" />

      {/* Card content */}
      <CardContent className="relative z-10 flex h-full flex-col justify-between px-6 py-2 text-white">
        {/* Card header */}
        <div className="mb-2 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-8 w-8 text-white/90" />
            <span className="text-sm font-medium text-white/80">{bankName}</span>
          </div>
        </div>

        {/* Card number */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="font-mono text-2xl tracking-wider">{cardNumber}</div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyCardNumber}
              className="h-8 w-8 p-0 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          {/* Card details */}
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-xs tracking-wide text-white/60 uppercase">Card Holder</p>
              <p className="text-sm font-medium">{cardHolderName}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
