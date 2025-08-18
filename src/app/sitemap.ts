import { MetadataRoute } from 'next'
import { Locale } from 'next-intl'
import { getPathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

// TODO: Change this to your site's base URL
const host = 'https://example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Add more pages to the sitemap as needed
  return [...getEntries('/'), ...getEntries('/about')]
}

type Href = Parameters<typeof getPathname>[0]['href']

function getEntries(href: Href) {
  return routing.locales.map(locale => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(routing.locales.map(cur => [cur, getUrl(href, cur)])),
    },
  }))
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })
  return host + pathname
}
