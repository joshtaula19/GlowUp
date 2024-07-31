export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('light').del()

  // Inserts seed entries
  await knex('light').insert([
    { id: 1, name: 'Bedside Lamp' },
    { id: 2, name: 'Clamping Desk Lamp' },
    { id: 3, name: 'Fancy Chandelier' },
  ])
}
