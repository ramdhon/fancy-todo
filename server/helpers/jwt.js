const jwt = require('jsonwebtoken');

module.exports = {
  verify: function(token) {
    return jwt.verify(token, process.env.SECRET_JWT)
  },
  sign: function(obj) {
    return jwt.sign(obj, process.env.SECRET_JWT);
  }
}