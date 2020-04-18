const express = require('express');
const router = express.Router();
const db = require('../../data/db-config');

router
	.route('/')
	.get((req, res) => {
		db('projects')
			.then(project => {
				res.json(project)
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve projects", error})
			})
	})
	.post((req, res) => {});

router
	.route('/:id')
	.get((req, res) => {})
	.put((req, res) => {})
	.delete((req, res) => {});

router
	.route('/:id/resources')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/:id/tasks')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/resources')
	.get((req, res) => {
		db('resources')
			.then(resource => {
				res.json(resource)
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve resources", error})
			})
	})
	.post((req, res) => {});

router
	.route('/resources/:id')
	.get((req, res) => {})
	.put((req, res) => {})
	.delete((req, res) => {});

router
	.route('/tasks')
	.get((req, res) => {
		db('tasks')
			.then(task => {
				res.json(task)
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve tasks", error})
			})
	})
	.post((req, res) => {
		const resource = req.body;
		db('projects')
			.insert(resource)
			.then(id => {
				console.log("resource: ",id);
				res.json({success: true, message: "Resource added", id: id, resource})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add resource", error})
			})
	});

router
	.route('/tasks/:id')
	.get((req, res) => {})
	.put((req, res) => {})
	.delete((req, res) => {});

module.exports = router;