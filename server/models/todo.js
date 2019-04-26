const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  description: String,
  status: Number,
  dueDate: Date,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

let Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;