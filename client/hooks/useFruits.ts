import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { LightsWithCategory } from '../../models/lights.ts'
import { useLights, useLightsWithCategories } from '../apis/api.ts'
import { query } from 'express'

export function useFruits() {
  const query = useQuery({
    queryKey: ['lightsWithCategories'],
    queryFn: useLightsWithCategories,
  })

  return query
}

export function useLightsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lights'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
