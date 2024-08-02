import { Lights, LightsID } from '../../models/lights'
import connection from './connection'

export async function all(): Promise<Lights[]> {
  const lights = await connection('lights').select('*')
  return lights as Lights[]
}

export async function byID(id: number): Promise<LightsID | undefined> {
  const light = await connection('lights').where({ id }).first()

  return light as LightsID | undefined
}
