'use client'

import React from 'react'
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

const ConfirmationEnum = z.enum(['yes', 'no'])

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nama harus mengandung sedikitnya 2 karakter',
  }),
  guest: z.number().min(1, {
    message: 'Jumlah tamu harus minimal 1 orang',
  }),
  confirmation: ConfirmationEnum,
})

const confirmationOptions = [
  {
    value: 'yes',
    label: 'Hadir',
  },
  {
    value: 'no',
    label: 'Maaf, saya tidak bisa hadir',
  },
]

export default function RSVPSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      guest: 1,
      confirmation: 'yes',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

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
                        className="text-foreground rounded-none bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jumlah Tamu (Orang)</FormLabel>
                    <Select
                      onValueChange={value => field.onChange(Number(value))}
                      defaultValue={field.value.toString()}
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
                name="confirmation"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Konfirmasi Kehadiran</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                className="mt-2 flex w-full rounded-none bg-white/10 text-white uppercase hover:bg-white/30 hover:text-white"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </BaseContainer>
    </section>
  )
}
