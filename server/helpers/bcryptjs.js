const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

module.exports = {
  compare: function(password, hash) {
    return bcrypt.compareSync(password, hash);
  },
  hash: function(password) {
    return bcrypt.hashSync(password, salt);
  }
}