'use client'

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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nama harus mengandung sedikitnya 2 karakter',
  }),
  message: z.string().min(3, {
    message: 'Pesan harus mengandung minimal 3 karakter',
  }),
})

export default function WishesForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
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
                  className="text-foreground rounded-none bg-white"
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
                  placeholder="..."
                  className="text-foreground rounded-none bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          variant="outline"
          className="mt-2 ml-auto flex w-full rounded-none bg-white/10 text-white uppercase hover:bg-white/30 hover:text-white"
        >
          Kirim Pesan
        </Button>
      </form>
    </Form>
  )
}
