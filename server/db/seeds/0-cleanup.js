exports.seed = async function(knex) {
  await knex('artProfiles').del()
}
