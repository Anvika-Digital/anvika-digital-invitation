import { useRouter } from '@/i18n/navigation'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  photo?: string
}

export function useAuth() {
  const router = useRouter()
  const [cookies, setCookies, removeCookie] = useCookies(['token', 'user'])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (cookies.token && cookies.user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [cookies.token, cookies.user])

  function login({ accessToken, user, redirectTo }: { accessToken: string; user: User; redirectTo?: string }) {
    const maxAge = 7 * 24 * 60 * 60 // 7 days in seconds
    setCookies('token', accessToken, { path: '/', maxAge })
    setCookies('user', JSON.stringify(user), { path: '/', maxAge })

    if (redirectTo) {
      router.replace(redirectTo)
    } else {
      router.replace('/')
    }
  }

  async function logout(redirectTo?: string) {
    // Remove cookies
    removeCookie('token', { path: '/' })
    removeCookie('user', { path: '/' })

    if (redirectTo) {
      router.replace(redirectTo)
    } else {
      router.replace('/')
    }
  }

  return {
    isAuthenticated,
    token: cookies.token,
    user: cookies.user ? (JSON.parse(JSON.stringify(cookies.user)) as User) : null,
    login,
    logout,
  }
}
