const jwt = require('../helpers/jwt');
const User = require('../models/user');

module.exports = (req, res, next) => {
  try {
    let decoded = jwt.verify(req.headers.token);
    User.findOne({
      email: decoded.email
    })
      .then(foundUser => {
        if (!foundUser) {
          res.status(401).json({ message: 'not recognized input data' });
        } else {
          next();
        }
      })
  } catch(err) {
    console.log(err);
    res.status(401).json({ message: 'not allowed to access', err });
  }
}