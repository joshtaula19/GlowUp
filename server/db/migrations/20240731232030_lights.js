/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('lights', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.boolean('status')
    table.integer('price')
    table
      .integer('category_id')
      .unsigned()
      .references('id')
      .inTable('categories')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  await knex.schema.dropTable('lights')
}
