const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  todolist: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

let User = mongoose.model('User', todoSchema);


module.exports = User;