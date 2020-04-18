
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'first task', notes: 'unbelievable note', status: 0},
        {description: 'second task', notes: 'stupendous note', status: 1},
        {description: 'third task', notes: 'mind-blowing note', status: 0}
      ]);
    });
};
