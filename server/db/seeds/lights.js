export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('light').del()

  // Inserts seed entries
  await knex('light').insert([
    {
      id: 1,
      name: 'Bedside Lamp',
      description: 'Small lamp, great for reading in bed',
    },
    {
      id: 2,
      name: 'Clamping Desk Lamp',
      description: 'A lamp that clamps, perfect for the home office',
    },
    { id: 3, name: 'Fancy Chandelier', description: 'Pure opulence' },
  ])
}
