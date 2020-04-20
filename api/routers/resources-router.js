const express = require('express');
const router = express.Router();
const db = require('../../data/db-config');

router
	.route('/')
	.get((req, res) => {
		db('resources')
			.then(resource => {
				res.json(resource)
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to retrieve resources", error})
			})
	})
	.post((req, res) => {
		const resource = req.body;
		db('resources')
			.insert(resource)
			.then(id => {
				console.log("resource: ", id);
				res.json({success: true, message: "Resource added", id: id, resource})
			})
			.catch(error => {
				res.status(500).json({success: false, message: "Unable to add resource", error})
			})
	})
	.route('/:id')
	.get((req, res) => {

	})
	.put((req, res) => {

	})
	.delete((req, res) => {

	});


module.exports = router;