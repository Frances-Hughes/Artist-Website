import connection from './connection'
import { artBackSchema } from '../../models/Art'

export async function getArtProfiles(db = connection) {
  return (await db('artProfiles').select()) as artBackSchema[]
}

export async function addArt(art: artBackSchema, db = connection) {
  return db('artProfile').insert(art)
}

export async function updateArt(
  id: Number,
  art: artBackSchema,
  db = connection
) {
  return await db('artProfile')
}

export function deleteArt(id: number, db = connection) {
  return db('artProfile')
    .where('id', id)
    .del()
}
