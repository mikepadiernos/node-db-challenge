const db = require('../../data/db-config');

module.exports = {
	findTaskById
};

function findTaskById(id) {
	return db('tasks')
		.join('projects', 'projects.id', 'tasks.project_id')
		.select(
			'projects.name',
			'projects.description',
			'tasks.id',
			// 'tasks.project_id',
			'tasks.description',
			'tasks.notes',
			'tasks.status'
		)
		.where('tasks.id', id)
		// .first();
}