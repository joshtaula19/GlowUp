/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('tickets', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.text('description').notNullable()
    table.integer('light_id').references('id').inTable('lights')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function down(knex) {
  await knex.schema.dropTable('tickets')
}
