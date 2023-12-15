exports.seed = async function(knex) {
  await knex('artProfiles').insert([
    {
      id: 1,
      picture: '../../test-pic.jpeg',
      name: 'test name',
      artist: 'test artist',
      description: 'test description',
      price: 100,
    },
  ])
}
