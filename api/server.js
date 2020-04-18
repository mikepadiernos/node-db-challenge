const express = require('express');
const helmet = require('helmet');
const middle = require('./middleware/middleware.js');

const logger = middle.logger;
const server = express();

server.use(helmet, logger, express.json());

// const projects = require('./routers/projects-router.js');

server
	.route('/')
	.get((req, res) => {
		res.send(`Ludicrous speed, GO!`);
	});

// server.use('/api/projects', projects);
// server.use('/projects', projects);

module.exports = server;
