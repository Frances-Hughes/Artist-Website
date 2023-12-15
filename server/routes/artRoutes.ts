import * as db from '../db/db'

import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const art = await db.getArtProfiles()
    res.json(art)
    console.log('working')
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const art = req.body
    await db.addArt(art)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const artData = {
      picture: req.body.picture,
      name: req.body.name,
      artist: req.body.artist,
      description: req.body.description,
      price: req.body.price,
      id: req.body.id,
    }
    const id = Number(req.params.id)
    await db.updateArt(id, artData)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteArt(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

export default router
