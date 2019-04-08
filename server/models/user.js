const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });

const bcrypt = require('../helpers/bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'required']
  },
  email: {
    type: String,
    // unique: [true, 'exist']
  },
  password: String,
  todolist: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

userSchema.path('email').validate(function(value) {
  return /[\w-]+@([\w-]+\.)+[\w-]+/gi.test(value);
}, 'not valid')

// userSchema.path('email').validate(function(value) {
//   console.log('VALUE === ', value)
//   return User.findOne({ email: value })
//     .then(user => {
//       if (user) return false;
//     })
// }, 'has been used before');

userSchema.pre('save', function (next) {
  // console.log('>>>', this);
  this.password = bcrypt.hash(this.password);
  // console.log(this.password);
  next();
})

let User = mongoose.model('User', userSchema);


module.exports = User;