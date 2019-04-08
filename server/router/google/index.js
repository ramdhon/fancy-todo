const express = require('express');
const google = express.Router();

const UserController = require('../../controllers/user');


google.post('/', UserController.signInGoogle);


module.exports = google;