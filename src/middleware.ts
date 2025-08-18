import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const nextIntlMiddleware = createMiddleware(routing)

/**
 * Protected routes that require authentication
 * All sub-paths under these routes are also protected
 * Examples:
 * - /admin protects /admin, /admin/dashboard, /admin/users/123, etc.
 * - /merchant protects /merchant, /merchant/orders, /merchant/settings, etc.
 */
const PROTECTED_ROUTES = ['/admin', '/merchant']

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

/**
 * Main middleware function
 * Handles both authentication protection and internationalization
 *
 * Flow:
 * 1. Check if current path is protected
 * 2. If protected and user not authenticated, redirect to sign-in
 * 3. Otherwise, continue with internationalization middleware
 */
export function middleware(request: NextRequest) {
  // Extract authentication data from cookies
  const token = request.cookies.get('token')?.value
  const user = request.cookies.get('user')?.value
  const pathname = request.nextUrl.pathname

  // User is authenticated if both token and user data exist
  const isAuthenticated = token && user

  // Check if current path requires authentication
  // Uses startsWith() to protect all sub-paths (e.g., /admin/dashboard, /merchant/orders)
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route))

  // Handle protected routes
  if (isProtectedRoute) {
    // Redirect unauthenticated users to sign-in page
    if (!isAuthenticated) {
      // Preserve the original path and query parameters for redirect after login
      const pathUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`
      const redirectUrl = `${process.env.NEXT_PUBLIC_HOST}${encodeURI(pathUrl)}`

      return NextResponse.redirect(
        `${new URL('/auth/signin', request.url)}?redirect=${redirectUrl}`
      )
    }
  }

  // Continue with internationalization middleware for all other requests
  return nextIntlMiddleware(request)
}
