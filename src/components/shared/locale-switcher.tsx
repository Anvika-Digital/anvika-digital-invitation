'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Locale, useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { ReactNode, useTransition } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CoreLocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map(cur => (
        <SelectItem key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  )
}

type Props = {
  children: ReactNode
  defaultValue: string
}

function LocaleSwitcherSelect({ children, defaultValue }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: string) {
    const nextLocale = value as Locale
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <Select defaultValue={defaultValue} disabled={isPending} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  )
}
