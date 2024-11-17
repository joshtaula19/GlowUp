import express from 'express'
import * as Path from 'node:path'

import lightRoutes from './routes/lights.ts'
import cartRoutes from './routes/cart.ts'
import ticketsRouter from './routes/repairs.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/lights', lightRoutes)
server.use('/api/v1/cart', cartRoutes)
server.use('/api/v1/tickets', ticketsRouter)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
