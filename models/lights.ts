export interface Lights {
  id: number
  name: string
  description: string
  status: boolean
  price: number
  image_url: string
  category_id: number // foreign key
}
