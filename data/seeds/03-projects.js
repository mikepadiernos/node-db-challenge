
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'the first', description: 'first of the', status: 0},
        {name: 'the second', description: 'second among', status: 0},
        {name: 'the third', description: 'thirds', status: 0},
      ]);
    });
};
