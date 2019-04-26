const gverify = require('../helpers/gverify');

module.exports = (req, res, next) => {
  gverify(req.body.token)
    .then(ticket => {
      const payload = ticket.getPayload();
      req.body.name = payload.name;
      req.body.email = payload.email;
      req.body.password = '';
      next();
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'internal server error', err });
    })
}