import React from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'
import BankCard from '@/components/shared/bank-card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Gift } from 'lucide-react'

type BankTransfer = {
  bankName: string
  accountNumber: string
  accountHolderName: string
}

const bankTransferOptions: BankTransfer[] = [
  {
    bankName: 'BCA',
    accountNumber: '7725266821',
    accountHolderName: 'Ida Ayu Kade Widya',
  },
  {
    bankName: 'BNI',
    accountNumber: '0909496813',
    accountHolderName: 'Ida Bagus Septian Dwi Masta',
  },
]

export default function GiftSection() {
  return (
    <section className="relative -top-[1px] min-h-screen w-full">
      <StaticImageBackground imageUrl="https://picsum.photos/id/98/1200/1500" overlay />
      <BaseContainer className="relative z-10 flex h-full w-full">
        <div className="w-full space-y-8 text-white">
          <h1 className="w-full text-5xl font-bold">Wedding Gift</h1>

          <div className="space-y-4">
            {bankTransferOptions.map(bank => (
              <BankCard
                key={bank.accountNumber}
                bankName={bank.bankName}
                cardNumber={bank.accountNumber}
                cardHolderName={bank.accountHolderName}
              />
            ))}
          </div>

          <Alert
            variant="default"
            className="rounded-xl border-white/30 bg-white/20 py-4 text-white"
          >
            <Gift size="20" className="my-auto mb-3.5" />
            <AlertTitle className="mb-2 text-base">Alamat Hadiah</AlertTitle>
            <AlertDescription className="text-base text-white">
              Jl. Cekomaria Perumahan BTN Kedua Permai blok i no 3, Peguyangan Kangin, Denpasar
              Utara.
            </AlertDescription>
          </Alert>

          <div className="mt-auto space-y-2 text-sm text-white">
            <p className="italic">
              * Mohon untuk melakukan konfirmasi hadiah anda dengan mengirim bukti transfer/ resi
              pengiriman kepada mempelai melalui personal message.
            </p>
          </div>
        </div>
      </BaseContainer>
    </section>
  )
}
