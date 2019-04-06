const express = require('express');
const todos = express.Router();

const TodoController = require('../../controllers/todo');


todos.get('/', TodoController.all);
todos.post('/', TodoController.create);
todos.get('/:id', TodoController.one);
todos.put('/:id', TodoController.update);
todos.delete('/:id', TodoController.delete);


module.exports = todos;