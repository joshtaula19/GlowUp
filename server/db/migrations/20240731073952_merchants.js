/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('merchants', (table) => {
    table.increments('id')
    table.string('merchant_name')
    table.integer('admin_id')
    table.integer('country_code')
    table.string('created_at')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('merchants')
}