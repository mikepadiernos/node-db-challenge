
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'first task', notes: 'unbelievable note', status: 'false'},
        {project_id: 1, description: 'second task', notes: 'stupendous note', status: 'true'},
        {project_id: 1, description: 'third task', notes: 'mind-blowing note', status: 'false'}
      ]);
    });
};
