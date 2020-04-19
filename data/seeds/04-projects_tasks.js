
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects_tasks').insert([
        {project_id: 1, task_id: 1},
        {project_id: 1, task_id: 2},
        {project_id: 1, task_id: 3}
      ]);
    });
};
