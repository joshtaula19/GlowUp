export interface Lights {
  id: number
  name: string
  description: string
  status: boolean
  price: number
  category_id: number // foreign key
}
