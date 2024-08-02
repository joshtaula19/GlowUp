import express from 'express'
// import * as db from '../db/lights'
// import knex from 'knex'
import connection from '../db/connection'

const router = express.Router()

router.post('/', async (req, res) => {
  const { light_id, quantity } = req.body

  try {
    const [cartItem] = await connection('cart')
      .insert({
        light_id,
        quantity,
      })
      .returning('*')
    res.status(201).json(cartItem)
  } catch (error) {
    console.error(error)
    throw error
  }
})

router.get('/', async (req, res) => {
  try {
    const cartItems = await connection('cart')
      .join('lights', 'cart.light_id', '=', 'lights.id')
      .select(
        'cart.id as cart_id',
        'lights.id as light_id',
        'lights.name',
        'lights.description',
        'lights.status',
        'lights.price',
        'lights.image_url',
        'lights.category_id',
        'cart.quantity',
      )

    res.json(cartItems)
  } catch (error) {
    console.error('Error fetching cart items:', error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
