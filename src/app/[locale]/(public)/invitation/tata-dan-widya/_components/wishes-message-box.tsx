'use client'

import React from 'react'
import CustomScrollbar from './custom-scrollbar'

const dummyMessages = [
  {
    id: 1,
    name: 'John Doe',
    message:
      'Congratulations on your special day! Wishing you both a lifetime filled with love, happiness, and beautiful memories together.',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Jane Smith',
    message:
      'What a beautiful celebration! May your marriage be blessed with endless joy, understanding, and unconditional love for each other.',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'Michael Johnson',
    message:
      'So happy to witness this amazing milestone in your lives. May your journey together be filled with adventure and countless precious moments.',
    createdAt: new Date(),
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    message:
      'Sending you both heartfelt wishes on your wedding day. May your love story continue to inspire others and grow stronger with each passing year.',
    createdAt: new Date(),
  },
  {
    id: 5,
    name: 'David Brown',
    message:
      'Congratulations to the happy couple! May your marriage be a source of strength, comfort, and endless happiness for both of you.',
    createdAt: new Date(),
  },
  {
    id: 6,
    name: 'Emily Davis',
    message:
      'What a perfect match you two make! Wishing you a wonderful wedding day and a future filled with laughter, love, and shared dreams.',
    createdAt: new Date(),
  },
  {
    id: 7,
    name: 'Robert Miller',
    message:
      'May your wedding day be just the beginning of a lifetime of happiness together. Congratulations and best wishes for your new journey as husband and wife.',
    createdAt: new Date(),
  },
  {
    id: 8,
    name: 'Lisa Anderson',
    message:
      'Celebrating with you on this special day! May your love continue to blossom and may you always find reasons to smile together.',
    createdAt: new Date(),
  },
  {
    id: 9,
    name: 'Christopher Taylor',
    message:
      'Wishing you both a marriage filled with all the right ingredients: love, laughter, trust, and understanding. Congratulations on finding your perfect match!',
    createdAt: new Date(),
  },
  {
    id: 10,
    name: 'Amanda White',
    message:
      "May your wedding day be everything you dreamed of and more. Here's to a beautiful future together filled with love, happiness, and endless possibilities.",
    createdAt: new Date(),
  },
]

export default function WishesMessageBox() {
  return (
    <CustomScrollbar className="h-[500px] w-full overflow-y-auto">
      <div className="h-full w-full space-y-4 px-2 py-6">
        {dummyMessages.map(msg => (
          <ChatBubble key={msg.id} {...msg} />
        ))}
      </div>
    </CustomScrollbar>
  )
}

type ChatBubbleProps = {
  name: string
  message: string
  createdAt: Date
}

function ChatBubble({ name, message, createdAt }: ChatBubbleProps) {
  return (
    <li className="flex flex-col items-end gap-y-2">
      <div className="space-y-4 rounded-lg bg-white/80 px-4 py-3">
        <p className="text-foreground text-xs uppercase">{name}</p>
        <p className="text-foreground text-sm font-medium">{message}</p>
        <p className="text-muted-foreground text-right text-xs">{createdAt.toDateString()}</p>
      </div>
    </li>
  )
}
