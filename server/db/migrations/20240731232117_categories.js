/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('categories', (table) => {
    table.increments('id').primary()
    table.integer('category_id')
    table.string('category')
  })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  
  export async function down(knex) {
    await knex.schema.dropTable('categories')
  }