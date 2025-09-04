import { sanitizeMessage } from '@/lib/utils'
import { z } from 'zod'

export const messageFormSchema = z.object({
  invitation_id: z.string(),
  name: z
    .string()
    .min(2, { message: 'Nama harus mengandung sedikitnya 2 karakter' })
    .transform(sanitizeMessage), // Also sanitize name field
  message: z
    .string()
    .min(3, { message: 'Pesan harus mengandung sedikitnya 3 karakter' })
    .max(500, { message: 'Pesan tidak boleh lebih dari 500 karakter' }) // Add length limit
    .transform(sanitizeMessage),
})
