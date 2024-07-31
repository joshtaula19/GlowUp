/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.integer('merchant_id')
    table.string('name')
    table.integer('price')
    table.string('status')
    table.string('created_at')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('products')
}
