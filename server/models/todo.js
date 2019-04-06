const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });

const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  description: String,
  status: Number,
  dueDate: Date,
})

let Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;