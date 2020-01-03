require('dotenv').config({ path: `${process.cwd()}/../.env` });

const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const port = process.env.APP_PORT;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => console.log(`Backend is running on ${port}`));

module.exports = server;
