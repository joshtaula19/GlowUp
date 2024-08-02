import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { useLights } from '../apis/api.ts'

export function useFruits() {
  const query = useQuery({ queryKey: ['lights'], queryFn: useLights })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function uselightsMutation<TData = unknown, TVariables = unknown>(
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
