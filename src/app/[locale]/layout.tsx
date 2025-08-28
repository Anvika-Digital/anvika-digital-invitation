import '@/app/globals.css'
import { routing } from '@/i18n/routing'
import { Metadata } from 'next'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Anvika | Digital Invitation',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  // Open Graph metadata for social sharing
  openGraph: {
    title: 'Anvika Digital Invitation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    url: 'https://www.loremipsum.com',
    siteName: 'Lorem Ipsum Site',
    images: [
      {
        url: 'https://www.loremipsum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lorem Ipsum Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Lorem Ipsum | Next.js Boilerplate',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: ['https://www.loremipsum.com/og-image.jpg'],
    creator: '@loremipsum', // Add your Twitter handle
    site: '@loremipsum', // Add your site's Twitter handle
  },

  // Keywords for SEO (use sparingly and relevantly)
  keywords: ['lorem', 'ipsum', 'nextjs', 'boilerplate', 'template'],

  // Author and publisher information
  authors: [{ name: 'Lorem Ipsum', url: 'https://www.loremipsum.com' }],
  creator: 'Lorem Ipsum',
  publisher: 'Lorem Ipsum Publisher',

  // Robots directive
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: 'https://www.loremipsum.com',
  },

  // Additional metadata
  category: 'Technology', // Adjust based on your content category

  // Referrer policy
  referrer: 'origin-when-cross-origin',
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
