export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()

  // Inserts seed entries
  await knex('categories').insert([
    {
      id: 1,
      description:
        'The black plastic on the power cord is starting to wear away',
      contact_details: 'mylampisbroken@itsdark.com',
    },
  ])
}
