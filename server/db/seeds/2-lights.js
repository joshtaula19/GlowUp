export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('lights').del()

  // Inserts seed entries
  await knex('lights').insert([
    {
      id: 1,
      name: 'Bedside Lamp',
      description: 'Small lamp, great for reading in bed.',
      status: 'Available',
      price: 39.99,
      category_id: 1,
    },
    {
      id: 2,
      name: 'Clamping Desk Lamp',
      description: 'A lamp that clamps, perfect for the home office.',
      status: 'Available',
      price: 29.99,
      category_id: 1,
    },
    {
      id: 3,
      name: 'Fancy Chandelier',
      description: 'Pure opulence.',
      status: 'Sold',
      price: 3000,
      category_id: 3,
    },
    {
      id: 4,
      name: 'Utility Light',
      description:
        'Make sure your work site is well lit with this 1000W halogen lamp.',
      status: 'Available',
      price: 54.99,
      category_id: 4,
    },
    {
      id: 5,
      name: 'Chill Lamp',
      description:
        'Invite ambience into your home with this fully dimmable floor lamp.',
      status: 'Available',
      price: 78.99,
      category_id: 2,
    },
  ])
}
