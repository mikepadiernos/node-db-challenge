const db = require('../../data/db-config');

module.exports = {
	findTaskById
};

function findTaskById(id) {
	return db('tasks')
		// .select('*')
		.select(
			'projects.name',
			'projects.description',
			'tasks.id',
			// 'tasks.project_id',
			'tasks.description',
			'tasks.notes',
			'tasks.status'
		)
		.join('projects', 'projects.id', 'tasks.project_id')
		.where('tasks.id', id)
		.first();
}