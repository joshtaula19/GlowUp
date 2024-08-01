export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('repairs').del()

  // Inserts seed entries
  await knex('repairs').insert([
    {
      id: 1,
      description:
        'The black plastic on the power cord is starting to wear away',
      contact_details: 'mylampisbroken@itsdark.com',
    },
  ])
}
