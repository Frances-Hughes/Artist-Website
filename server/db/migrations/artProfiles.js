exports.up = async function(knex) {
  await knex.schema.createTable('artProfiles', (table) => {
    table.increments('id').primary()
    table.string('picture')
    table.string('name')
    table.string('artist')
    table.string('description')
    table.string('price')
  })
}
exports.down = function(knex) {
  return knex.schema.dropTable('artProfiles')
}
