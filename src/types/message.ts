export type Message = {
  id: string
  invitation_id: string
  name: string
  message: string
  created_at: string
  deleted_at?: string | null
}

export type MessageInput = {
  invitation_id: string
  name: string
  message: string
}
