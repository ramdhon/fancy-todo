const express = require('express');
const signup = express.Router();

const UserController = require('../../controllers/user');


signup.post('/', UserController.signUp);


module.exports = signup;