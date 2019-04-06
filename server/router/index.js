const express = require('express');
const router = express.Router();

const todos = require('./todos');
const users = require('./users');

app.use('/users', users);
app.use('/todos', todos);


module.exports = router;