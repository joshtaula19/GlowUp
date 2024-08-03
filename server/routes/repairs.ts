import express from 'express'
// import * as db from '../db/lights'
import connection from '../db/connection'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, description, light_id } = req.body
    const [id] = await connection('tickets').insert({
      name,
      email,
      description,
      light_id,
    })
    res.status(201).json({ id, name, email, description, light_id })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/', async (req, res) => {
  try {
    const tickets = await connection('tickets').select('*')
    res.status(200).json(tickets)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const rowsDeleted = await connection('tickets').where('id', id).del()

    if (rowsDeleted) {
      res
        .status(200)
        .json({ message: `Ticket with id ${id} deleted successfully` })
    } else {
      res.status(404).json({ message: `Ticket with id ${id} not found` })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ticket' })
  }
})

export default router
