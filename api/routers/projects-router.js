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
	.post((req, res) => {
		const project = req.body;
		db('projects')
			.insert(project)
			.then(id => {
				console.log("project: ", id);
				res.json({success: true, message: "Project added", id: id, project})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add project", error})
			})
	})
	.route('/:id')
	.get((req, res) => {
		const id = req.params;
		db('projects')
			.where(id)
			.first()
			.then(project => {
				project
					? res.json({success: true, message: "Project found", project})
					: res.status(400).json({success: false, message: "Project not found"})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve project", error})
			})
	})
	.put((req, res) => {

	})
	.delete((req, res) => {

	})
	.route('/:id/resources')
	.get((req, res) => {

	})
	.route('/:id/tasks')
	.get((req, res) => {

	});

module.exports = router;