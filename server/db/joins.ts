import knex from 'knex'

export async function getLightsWithCategories() {
  const lightsWithCategories = await knex('lights as l')
    .innerJoin('categories as c', 'l.category_id', 'c.id')
    .select(
      'l.id as light_id',
      'l.name as light_name',
      'l.description as light_description',
      'l.status as light_status',
      'l.price as light_price',
      'l.image_url as light_image_url',
      'c.id as category_id',
      'c.category as category_name',
    )
  return lightsWithCategories
}

export async function getRepairsWithCategories() {
  const repairsWithCategories = await knex('repairs as r')
    .innerJoin('categories as c', 'r.category_id', 'c.id')
    .select(
      'r.id as repair_id',
      'r.description as repair_description',
      'r.contact_details as repairs_contact_details',
      'c.id as category_id',
      'c.category as category_name',
    )
  return repairsWithCategories
}
