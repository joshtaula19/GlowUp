// import { Categories, CategoriesID } from '../../models/categories'
// import connection from './connection'

// export async function allCategories(): Promise<Categories[]> {
//   const Categories = await connection('categories').select('*')
//   return Categories as Categories[]
// }

// export async function CategoriesbyID(
//   id: number,
// ): Promise<CategoriesID | undefined> {
//   const light = await connection('categories')
//     .join('id', 'category_id', 'category')
//     .where({ id })
//     .first()

//   return light as CategoriesID | undefined
// }
