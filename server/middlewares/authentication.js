const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    let decoded = jwt.verify(req.headers.token, process.env.SECRET_JWT );
    next();
  } catch(err) {
    res.status(401).json({ message: 'authentication failure', err })
  }
}