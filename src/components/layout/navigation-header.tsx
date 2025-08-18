import { Link } from '@/i18n/navigation'
import LocaleSwitcher from '@/components/shared/locale-switcher'
import ThemeSwitcher from '@/components/shared/theme-switcher'

export default function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow dark:bg-gray-900">
      <nav className="mx-auto max-w-4xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            {/* Add your logo or title here */}
            <span className="text-xl font-semibold">MyApp</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/auth/signin"
              className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            >
              Sign In
            </Link>

            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
}
