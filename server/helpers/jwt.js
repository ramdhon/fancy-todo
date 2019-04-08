const jwt = require('jsonwebtoken');

module.exports = {
  sign: function(obj, secret) {
    return jwt.sign(obj, secret)
  },
  verify: function(token, secret) {
    return jwt.verify(token, secret);
  }
}