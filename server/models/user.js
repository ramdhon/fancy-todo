const mongoose = require('mongoose');

const bcrypt = require('../helpers/bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'required']
  },
  email: {
    type: String,
  },
  password: String,
})

userSchema.path('email').validate(function(value) {
  return /[\w-]+@([\w-]+\.)+[\w-]+/gi.test(value);
}, 'not valid')

userSchema.path('email').validate(function(value) {
  console.log('VALUE === ', value)
  return User.findOne({ email: value })
    .then(user => {
      if (user) return false;
    })
}, 'has been used before');

userSchema.pre('save', function (next) {
  this.password = bcrypt.hash(this.password);
  next();
})

let User = mongoose.model('User', userSchema);


module.exports = User;