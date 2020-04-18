const express = require('express');
const router = express.Router();
const db = require('../../data/db-config');

router
	.route('/')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/:id')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/:id/resources')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/id/tasks')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/resources')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/resources/:id')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/tasks')
	.get((req, res) => {})
	.post((req, res) => {});

router
	.route('/tasks/:id')
	.get((req, res) => {})
	.post((req, res) => {});

