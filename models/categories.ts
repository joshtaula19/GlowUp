export interface Categories {
  id: number
  category_id: number
  category: string
}

export interface CategoriesID extends Categories {
  category_id: number
}
