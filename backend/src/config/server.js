require('dotenv').config({ path: `${process.cwd()}/../.env` });

const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

const server = express();
const port = process.env.APP_PORT;

server.use(allowCors);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => console.log(`Backend is running on ${port}`));

module.exports = server;
