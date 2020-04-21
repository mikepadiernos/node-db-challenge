const express = require('express');
const router = express.Router();
const db = require('../../data/db-config');
const helper = require('../helpers/tasks-helper.js')

router
	.route('/')
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
		const task = req.body;
		db('tasks')
			.insert(task)
			.then(id => {
				console.log("task: ", id);
				res.json({success: true, message: "Task added", id: id, task})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add task", error})
			})
	});

router
	.route('/:id')
	.get((req, res) => {
		const id = req.params.id;
		helper.findTaskById(id)
			.then(task => {
				console.log('task', task);
				console.log('id', id);
				task
					? res.json({success: true, message: "Task found", task})
					: res.status(400).json({success: false, message: "Task not found"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve task", error})
			})

	})
	.put((req, res) => {})
	.delete((req, res) => {});

module.exports = router;