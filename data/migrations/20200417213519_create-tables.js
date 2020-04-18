
exports.up = function(knex) {
	return knex.schema
		.createTable('tasks', tbl => {
			tbl.increments();
		})
		.createTable('resources', tbl => {})
		.createTable('projects', tbl => {})
		.createTable('projects_tasks', tbl => {})
		.createTable('projects_resources', tbl => {})
};

exports.down = function(knex) {
  
};
