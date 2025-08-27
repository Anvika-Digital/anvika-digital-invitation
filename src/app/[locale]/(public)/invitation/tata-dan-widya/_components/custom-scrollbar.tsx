'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CustomScrollbarProps {
  children: ReactNode
  className?: string
}

export default function CustomScrollbar({ children, className }: CustomScrollbarProps) {
  return (
    <>
      <style jsx global>{`
        .ios-scrollbar {
          /* Firefox */
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0) transparent;
          transition: scrollbar-color 0.3s ease;
        }

        .ios-scrollbar:hover {
          scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
        }

        /* WebKit browsers (Chrome, Safari, Edge) */
        .ios-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .ios-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 3px;
        }

        .ios-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0);
          border-radius: 3px;
          border: none;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          min-height: 20px;
        }

        .ios-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
        }

        .ios-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 8px;
        }

        .ios-scrollbar::-webkit-scrollbar-thumb:active {
          background: rgba(255, 255, 255, 0.6) !important;
        }

        .ios-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }

        /* iOS-like smooth scrolling */
        .ios-scrollbar {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          scroll-behavior: smooth;
        }

        /* Custom animation for smooth appearance */
        @keyframes fadeInScrollbar {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .ios-scrollbar:hover::-webkit-scrollbar-thumb {
          animation: fadeInScrollbar 0.2s ease;
        }
      `}</style>
      <div className={cn('ios-scrollbar', className)} style={{ overscrollBehavior: 'contain' }}>
        {children}
      </div>
    </>
  )
}
