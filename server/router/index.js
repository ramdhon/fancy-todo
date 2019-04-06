const express = require('express');
const router = express.Router();

const todos = require('./todos');


app.use('/todos', todos);


module.exports = router;