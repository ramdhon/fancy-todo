const express = require('express');
const users = express.Router();

const UserController = require('../../controllers/user');


users.get('/', UserController.all);
users.post('/', UserController.create);
users.get('/:id', UserController.one);
users.put('/:id', UserController.update);
users.delete('/:id', UserController.delete);


module.exports = users;