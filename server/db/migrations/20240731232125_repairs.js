/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('repairs', (table) => {
    table.increments('id').primary()
    table.string('description')
    table.string('contact_details')
    table.integer('category_id').references('categories.id').onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  await knex.schema.dropTable('repairs')
}
