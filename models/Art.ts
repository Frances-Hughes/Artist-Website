import * as z from 'zod'

export const artSchema = z.object({
  //Details
  picture: z.string(),
  name: z.string(),
  artist: z.string(),
  description: z.string(),
  price: z.number(),
})

export const artBackendSchema = artSchema.extend({
  id: z.number(),
})

export type artBackSchema = z.infer<typeof artBackendSchema>
