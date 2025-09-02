'use server'

import { RSVPFormSchema } from '@/shared/schema/rsvp'
import { RSVPInput } from '@/types/rsvp'
import { supabase } from '@/lib/supabase'

type ActionResult =
  | { ok: true; message: string }
  | { ok: false; fieldErrors: Record<string, string[] | undefined>; formError?: string }

export async function submitRSVP(input: RSVPInput): Promise<ActionResult> {
  // Validate on the server
  const parsed = RSVPFormSchema.safeParse(input)
  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    // Prepare RSVP data for database
    const rsvpData: RSVPInput = {
      invitation_id: parsed.data.invitation_id,
      name: parsed.data.name,
      guest_count: parsed.data.guest_count,
      accepting_rsvp: parsed.data.accepting_rsvp,
    }

    // Insert RSVP into Supabase
    const { data, error } = await supabase.from('rsvps').insert([rsvpData]).select()

    if (error) {
      console.error('Supabase error:', error)
      return {
        ok: false,
        fieldErrors: {},
        formError: 'Gagal menyimpan RSVP. Silakan coba lagi.',
      }
    }

    if (!data || data.length === 0) {
      return {
        ok: false,
        fieldErrors: {},
        formError: 'Gagal menyimpan RSVP. Silakan coba lagi.',
      }
    }

    return {
      ok: true,
      message: `Terima kasih ${parsed.data.name}! RSVP Anda sudah kami terima`,
    }
  } catch (err) {
    console.error('Unexpected error submitting RSVP:', err)
    // Catch unexpected server errors in a safe, serializable way
    return {
      ok: false,
      fieldErrors: {},
      formError: 'Terjadi kesalahan di server. Coba beberapa saat lagi.',
    }
  }
}
