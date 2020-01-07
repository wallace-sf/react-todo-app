const express = require('express');
const router = express.Router();

module.exports = server => {
    // API Routes
    server.use('/api', router);

    // TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');
}