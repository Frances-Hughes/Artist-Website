import express from 'express'

import artRoutes from './routes/artRoutes'

const server = express()

server.use(express.json())
server.use('/api/v1/art', artRoutes)
server.use('/api/v1/*', (req, res) => res.sendStatus(404))

export default server
