import { z } from 'zod'

export const RSVPFormSchema = z.object({
  invitation_id: z.string(),
  name: z.string().min(2, { message: 'Nama harus mengandung sedikitnya 2 karakter' }),
  guest_count: z.coerce.number().min(1, { message: 'Jumlah tamu harus minimal 1 orang' }),
  accepting_rsvp: z.boolean(),
})
