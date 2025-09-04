'use client'

import { submitMessage } from '@/app/action'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { messageFormSchema } from '@/shared/schema/message'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import { useCallback, useMemo, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

const COOKIE_NAME = 'MessageSubmit'
const COOKIE_EXPIRY_DAYS = 7 // Increased from 1 day to 7 days
const INVITATION_ID = 'tata-dan-widya'

interface CookieData {
  name: string
  submitted_at: string
  message: string
}

// Helper function to safely parse cookie data
const parseCookieData = (cookieValue: string): CookieData | null => {
  try {
    const data = JSON.parse(cookieValue)
    if (data && typeof data === 'object' && 'name' in data && 'message' in data) {
      return data as CookieData
    }
  } catch (error) {
    console.error('Error parsing MessageSubmit cookie:', error)
  }
  return null
}

export default function WishesForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Memoize cookie data parsing to avoid repeated parsing
  const cookieData = useMemo(() => {
    const messageCookie = Cookies.get(COOKIE_NAME)
    return messageCookie ? parseCookieData(messageCookie) : null
  }, [])

  const hasSubmitted = Boolean(cookieData)

  // Memoize default values to prevent unnecessary re-renders
  const defaultValues = useMemo(
    () => ({
      invitation_id: INVITATION_ID,
      name: cookieData?.name || '',
      message: cookieData?.message || '',
    }),
    [cookieData]
  )

  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues,
    mode: 'onBlur', // Validate on blur for better UX
  })

  // Show notification for returning users
  useEffect(() => {
    if (cookieData?.name) {
      toast.info(`Pesan sudah dikirim sebelumnya oleh: ${cookieData.name}`)
    }
  }, [cookieData?.name])

  const onSubmit = useCallback(
    async (values: z.infer<typeof messageFormSchema>) => {
      if (hasSubmitted) {
        toast.warning('Pesan sudah pernah dikirim sebelumnya')
        return
      }

      setIsSubmitting(true)

      try {
        const result = await submitMessage(values)

        if (result.ok) {
          // Create cookie data
          const newCookieData: CookieData = {
            name: values.name,
            message: values.message,
            submitted_at: new Date().toISOString(),
          }

          // Set cookie
          Cookies.set(COOKIE_NAME, JSON.stringify(newCookieData), {
            expires: COOKIE_EXPIRY_DAYS,
          })

          toast.success(result.message)

          // Reset form to default values
          form.reset(defaultValues)
        } else {
          // Handle form errors
          if (result.formError) {
            toast.error(result.formError)
          }

          // Handle field errors
          if (result.fieldErrors) {
            Object.entries(result.fieldErrors).forEach(([field, errors]) => {
              if (errors?.[0]) {
                form.setError(field as keyof typeof values, {
                  type: 'manual',
                  message: errors[0],
                })
              }
            })
          }
        }
      } catch (error) {
        console.error('Error submitting message:', error)
        toast.error('Terjadi kesalahan yang tidak terduga. Silakan coba lagi.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [hasSubmitted, form, defaultValues]
  )

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Tuliskan nama anda</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan nama Anda"
                    {...field}
                    disabled={hasSubmitted}
                    className="text-foreground rounded-none bg-white disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Berikan ucapan & doa</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tuliskan ucapan dan doa terbaik Anda untuk kedua mempelai..."
                    className="text-foreground min-h-[100px] rounded-none bg-white disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={hasSubmitted}
                    maxLength={500}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                {!hasSubmitted && (
                  <p className="text-xs text-white/70">{field.value?.length || 0}/500 karakter</p>
                )}
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            variant="outline"
            className="mt-2 ml-auto flex w-full rounded-none bg-white/10 text-white uppercase hover:bg-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting || hasSubmitted}
          >
            {isSubmitting ? 'Mengirim...' : hasSubmitted ? 'Pesan Sudah Dikirim' : 'Kirim Pesan'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
