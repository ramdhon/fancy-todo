const express = require('express');
const users = express.Router();

const UserController = require('../../controllers/user');
const Authentication = require('../../middlewares/authentication');


users.get('/user', Authentication, UserController.authuser);
users.get('/', Authentication, UserController.all);
users.post('/', Authentication, UserController.create);
users.get('/:id', Authentication, UserController.one);
users.put('/:id', Authentication, UserController.update);
users.delete('/:id', Authentication, UserController.delete);


module.exports = users;