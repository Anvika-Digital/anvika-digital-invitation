'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import StaticImageBackground from './static-image-background'
import BaseContainer from '@/shared/components/base-container'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { RSVPFormSchema } from '@/shared/schema/rsvp'
import { submitRSVP } from '@/app/action'
import { toast } from 'sonner'
import Cookies from 'js-cookie'

const COOKIE_NAME = 'RSVPSubmit'
const COOKIE_EXPIRY_DAYS = 30
const INVITATION_ID = 'tata-dan-widya'

const confirmationOptions = [
  {
    value: 'true',
    label: 'Hadir',
  },
  {
    value: 'false',
    label: 'Maaf, saya tidak bisa hadir',
  },
] as const

interface CookieData {
  name: string
  guest_count: number
  accepting_rsvp: boolean
  submitted_at: string
}

// Helper function to safely parse cookie data
const parseCookieData = (cookieValue: string): CookieData | null => {
  try {
    const data = JSON.parse(cookieValue)
    if (data && typeof data === 'object' && 'name' in data) {
      return data as CookieData
    }
  } catch (error) {
    console.error('Error parsing RSVP cookie:', error)
  }
  return null
}

export default function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Memoize cookie data parsing to avoid repeated parsing
  const cookieData = useMemo(() => {
    const rsvpCookie = Cookies.get(COOKIE_NAME)
    return rsvpCookie ? parseCookieData(rsvpCookie) : null
  }, [])

  const hasSubmitted = Boolean(cookieData)

  // Memoize default values to prevent unnecessary re-renders
  const defaultValues = useMemo(
    () => ({
      invitation_id: INVITATION_ID,
      name: cookieData?.name || '',
      accepting_rsvp: cookieData?.accepting_rsvp ?? true,
      guest_count: cookieData?.guest_count || 1,
    }),
    [cookieData]
  )

  const form = useForm<z.infer<typeof RSVPFormSchema>>({
    resolver: zodResolver(RSVPFormSchema),
    defaultValues,
  })

  // Show notification for returning users
  useEffect(() => {
    if (cookieData?.name) {
      toast.info(`RSVP sudah dikirim sebelumnya untuk: ${cookieData.name}`)
    }
  }, [cookieData?.name])

  const onSubmit = useCallback(
    async (values: z.infer<typeof RSVPFormSchema>) => {
      if (hasSubmitted) {
        toast.warning('RSVP sudah pernah dikirim sebelumnya')
        return
      }

      setIsSubmitting(true)

      try {
        const result = await submitRSVP(values)

        if (result.ok) {
          // Create cookie data
          const newCookieData: CookieData = {
            name: values.name,
            guest_count: values.guest_count,
            accepting_rsvp: values.accepting_rsvp,
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
        console.error('Error submitting RSVP:', error)
        toast.error('Terjadi kesalahan yang tidak terduga. Silakan coba lagi.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [hasSubmitted, form, defaultValues]
  )

  return (
    <section className="relative -top-[1px] h-full w-full">
      <StaticImageBackground imageUrl="/static/tata-widya/casual-4.webp" overlay />
      <BaseContainer className="relative z-10 flex min-h-dvh w-full items-center">
        <div className="relative w-full space-y-4 bg-white/15 px-6 py-8 text-white backdrop-blur-sm">
          <h1 className="font-playfair mb-4 text-3xl">RSVP</h1>
          <p className="text-sm text-white">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
            Atas kehadiran serta doa restu, kami ucapkan terima kasih.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan nama Anda"
                        {...field}
                        disabled={hasSubmitted}
                        className="text-foreground rounded-none bg-white disabled:opacity-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guest_count"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jumlah Tamu (Orang)</FormLabel>
                    <Select
                      onValueChange={value => field.onChange(Number(value))}
                      value={field.value.toString()}
                      disabled={hasSubmitted}
                    >
                      <FormControl>
                        <SelectTrigger className="text-foreground w-full rounded-none bg-white">
                          <SelectValue placeholder="Berapa orang yang akan hadir?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-none">
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accepting_rsvp"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Konfirmasi Kehadiran</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={value => field.onChange(value === 'true')}
                        value={field.value.toString()}
                        disabled={hasSubmitted}
                        className="flex flex-col"
                      >
                        {confirmationOptions.map(option => (
                          <FormItem className="flex items-center gap-3" key={option.value}>
                            <FormControl>
                              <RadioGroupItem value={option.value} />
                            </FormControl>
                            <FormLabel className="font-normal">{option.label}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                variant="outline"
                className="mt-2 flex w-full rounded-none bg-white/10 text-white uppercase hover:bg-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting || hasSubmitted}
              >
                {isSubmitting ? 'Mengirim...' : hasSubmitted ? 'RSVP Sudah Dikirim' : 'Submit'}
              </Button>
            </form>
          </Form>
        </div>
      </BaseContainer>
    </section>
  )
}
