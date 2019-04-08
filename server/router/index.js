const express = require('express');
const router = express.Router();

const todos = require('./todos');
const users = require('./users');
const google = require('./google');
const signin = require('./signin');
const signup = require('./signup');


router.use('/users', users);
router.use('/todos', todos);
router.use('/google-sign-in', google);
router.use('/sign-in', signin);
router.use('/sign-up', signup);


module.exports = router;