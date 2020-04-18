
exports.up = function(knex) {
	return knex.schema
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.string('description', 255)
				.notNullable();
			tbl.string('notes', 255);
			tbl.boolean('status');
		})
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('name', 255)
				.notNullable()
				.unique();
			tbl.string('description', 255)
				.notNullable();
		})
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.string('name', 255)
				.notNullable();
			tbl.string('description', 255)
				.notNullable();
			tbl.boolean('status');
		})
		.createTable('projects_tasks', tbl => {
			tbl.increments();
			tbl.foreign('project_id').references('projects.id')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.foreign('task_id').references('tasks.id')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.primary(['project_id', 'task_id']);
		})
		.createTable('projects_resources', tbl => {
			tbl.increments();
			tbl.foreign('project_id').references('projects.id')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.foreign('resource_id').references('resources.id')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.primary(['project_id', 'resource_id']);
		})
};

exports.down = function(knex) {
  return knex.schema
	  .dropTableIfExists('projects_resources')
	  .dropTableIfExists('projects_tasks')
	  .dropTableIfExists('projects')
	  .dropTableIfExists('resources')
	  .dropTableIfExists('tasks')
};
