
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource 1', description: 'fabulous'},
        {name: 'resource 2', description: 'just... fabulous'},
        {name: 'resource 3', description: 'really just... fabulous'}
      ]);
    });
};
