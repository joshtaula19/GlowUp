export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('light').del()

  // Inserts seed entries
  await knex('light').insert([
    {
      id: 1,
      merchant_id: 1,
      name: 'Bedside Lamp',
      description: 'Small lamp, great for reading in bed',
      price: 39.99,
      status: 'Available',
      created_at: 'June',
    },
    {
      id: 2,
      merchant_id: 2,
      name: 'Clamping Desk Lamp',
      description: 'A lamp that clamps, perfect for the home office',
      price: 29.99,
      status: 'Available',
      created_at: 'July',
    },
    {
      id: 3,
      merchant_id: 3,
      name: 'Fancy Chandelier',
      description: 'Pure opulence',
      price: 3000,
      status: 'Sold',
      created_at: 'May',
    },
  ])
}
