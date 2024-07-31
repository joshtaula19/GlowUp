/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.increments('order_id')
    table.integer('product_id')
    table.integer('quantity')
  })
}  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('order_items')
}
