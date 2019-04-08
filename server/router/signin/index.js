const express = require('express');
const signin = express.Router();

const UserController = require('../../controllers/user');


signin.post('/', UserController.signIn);


module.exports = signin;