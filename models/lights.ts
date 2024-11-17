export interface Lights {
  id: number
  name: string
  description: string
  status: boolean
  price: number
  image_url: string
  category_id: number // foreign key
}

export interface LightsID extends Lights {
  id: number
  category_id: number
}

export interface LightsWithCategory extends Lights {
  category_name: string
}
