const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });

const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  todo: String,
  date: Date,
})

let Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;