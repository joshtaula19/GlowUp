import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Lights, LightsID } from '../../models/lights'
import { LightsWithCategory } from '../../models/lights'
import { CartItem } from '../../models/cart'
// import { Categories } from '../../models/categories'
// import { Repairs } from '../../models/repairs'

// const rootUrl = '/api/v1'

export function useLights() {
  return useQuery({
    queryKey: ['lights'],
    queryFn: async () => {
      const data = await request.get('/api/v1/lights')
      return data.body as Lights[]
    },
  })
}

export function useLightsWithCategories() {
  return useQuery({
    queryKey: ['lightsWithCategories'],
    queryFn: async () => {
      const response = await fetch('/api/v1/lights/with-categories')
      const data = await response.json()
      return data as LightsWithCategory[]
    },
  })
}

export function useLightDetails(id: number) {
  return useQuery({
    queryKey: ['lights', id],
    queryFn: async () => {
      const data = await request.get(`/api/v1/lights/${id}`)
      return data.body as LightsID
    },
  })
}

export function useCart() {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const data = await request.get('/api/v1/cart')
      return data.body as CartItem[]
    },
  })
}
// export function useCategory(category_id: number) {
//   return useQuery({
//     queryKey: ['category', category_id],
//     queryFn: async () => {
//       const data = await request.get(`/api/v1/${category_id}`)
//       return data.body as Categories
//     }
//   })
// }
