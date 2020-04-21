
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'computer', description: 'fabulous'},
        {name: 'delivery van', description: 'just... fabulous'},
        {name: 'microphone', description: 'really just... fabulous'}
      ]);
    });
};
