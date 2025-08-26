import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const nextIntlMiddleware = createMiddleware(routing)

/**
 * Middleware configuration
 * Matches all pathnames except:
 * - API routes (/api/*)
 * - Next.js internal routes (/_next/*)
 * - Vercel internal routes (/_vercel/*)
 * - Static files (files with dots like favicon.ico, images, etc.)
 */
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the path is already the target invitation
  const isTargetInvitation = pathname.includes('/invitation/tata-dan-widya')

  // If not already on the target invitation page, redirect to default locale version
  if (!isTargetInvitation) {
    const redirectUrl = new URL('/invitation/tata-dan-widya', request.url)
    return NextResponse.redirect(redirectUrl)
  }

  // Continue with internationalization middleware for the target route
  return nextIntlMiddleware(request)
}
