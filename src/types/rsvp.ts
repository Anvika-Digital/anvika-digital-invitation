export type RSVP = {
  id: string
  invitation_id: string
  name: string
  guest_count: number
  accepting_rsvp: boolean
  created_at: string
  updated_at?: string
  deleted_at?: string
}

export type RSVPInput = {
  invitation_id: string
  name: string
  guest_count: number
  accepting_rsvp: boolean
}
