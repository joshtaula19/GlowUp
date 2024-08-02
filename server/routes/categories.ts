// import express from 'express'
// import * as db from '../db/categories'

// const router = express.Router()

// // Route to get all lights
// router.get('/', async (req, res) => {
//   try {
//     const data = await db.allCategories()
//     res.json(data)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

// // Route to get a Category by ID
// router.get('/:id', async (req, res, next) => {
//   try {
//     const id = Number(req.params.id)

//     if (isNaN(id)) {
//       return res.status(400).json({ message: 'Invalid ID' })
//     }

//     const data = await db.CategoriesbyID(id)

//     if (!data) {
//       return res.status(404).json({ message: 'Category not found' })
//     }

//     res.json(data)
//   } catch (error) {
//     next(error)
//   }
// })

// export default router
