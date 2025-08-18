import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <main className="mx-auto max-w-4xl py-20">
      <section className="my-8">
        <h1 className="text-2xl font-bold">
          {t('title')} {t('subtitle')}
        </h1>
      </section>
    </main>
  )
}
