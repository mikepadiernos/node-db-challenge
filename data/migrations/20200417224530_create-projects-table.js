
exports.up = function(knex) {
	return knex.schema
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
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.integer('project_id')
				.references('id')
				.inTable('projects')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('description', 255)
				.notNullable();
			tbl.string('notes', 255);
			tbl.boolean('status');
		})
		.createTable('projects_tasks', tbl => {
			tbl.increments();
			tbl.integer('project_id')
				.references('id')
				.inTable('projects')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.integer('task_id')
				.references('id')
				.inTable('tasks')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('projects_resources', tbl => {
			tbl.increments();
			tbl.integer('project_id')
				.references('id')
				.inTable('projects')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.integer('resource_id')
				.references('id')
				.inTable('resources')
				.notNullable()
				.unsigned()
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('projects_resources')
		.dropTableIfExists('projects_tasks')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects')
		.dropTableIfExists('resources')
};
