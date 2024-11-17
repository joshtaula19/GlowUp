/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('cart', (table) => {
    table.increments('id').primary()
    table
      .integer('light_id')
      .references('id')
      .inTable('lights')
      .onDelete('CASCADE')
    table.integer('quantity').defaultTo(1)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  await knex.schema.dropTable('cart')
}
