const express = require('express');
const todos = express.Router();

const TodoController = require('../../controllers/todo');
const Authentication = require('../../middlewares/authentication');
const AuthorizeAuthUser = require('../../middlewares/authorizeAuthUser');


todos.get('/', Authentication, TodoController.all);
todos.post('/', Authentication, TodoController.create);
todos.get('/:id', Authentication, TodoController.one);
todos.put('/:id', Authentication, AuthorizeAuthUser, TodoController.update);
todos.delete('/:id', Authentication, AuthorizeAuthUser, TodoController.delete);


module.exports = todos;