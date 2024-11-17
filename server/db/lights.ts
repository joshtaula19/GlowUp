import { Lights, LightsID, LightsWithCategory } from '../../models/lights'
import connection from './connection'

export async function all(): Promise<Lights[]> {
  const lights = await connection('lights').select('*')
  return lights as Lights[]
}

export async function byID(id: number): Promise<LightsID | undefined> {
  const light = await connection('lights').where({ id }).first()

  return light as LightsID | undefined
}

export async function getLightsWithCategories(): Promise<LightsWithCategory[]> {
  const lightsWithCategories = await connection('lights')
    .join('categories', 'lights.category_id', 'categories.id')
    .select(
      'lights.id',
      'lights.name',
      'lights.description',
      'lights.status',
      'lights.price',
      'lights.image_url',
      'categories.id as category_id',
      'categories.category as category_name',
    )
  return lightsWithCategories
}
