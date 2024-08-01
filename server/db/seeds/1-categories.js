export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()

  // Inserts seed entries
  await knex('categories').insert([
    {
      id: 1,
      category_id: 1,
      category: 'Table Lamp',
    },
    {
      id: 2,
      category_id: 2,
      category: 'Floor Lamp',
    },
    {
      id: 3,
      category_id: 3,
      category: 'Overhead Lighting',
    },
    {
      id: 4,
      category_id: 4,
      category: 'Industrial',
    },
  ])
}
