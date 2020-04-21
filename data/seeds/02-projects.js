
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'the first', description: 'first of the', status: 'false'},
        {name: 'the second', description: 'second among', status: 'false'},
        {name: 'the third', description: 'thirds', status: 'false'},
      ]);
    });
};
