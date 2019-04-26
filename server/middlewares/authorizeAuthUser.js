const jwt = require('../helpers/jwt');
const Todo = require('../models/todo');

module.exports = (req, res, next) => {
  let decoded = jwt.verify(req.headers.token);

  Todo.findById(req.params.id)
    .then(todo => {
      if (!todo) {
        res.status(404).json({ message: 'not found to authorize', todo });
      } else {
        if (todo.creator != decoded.id) {
          res.status(401).json({ message: 'unauthorized to access'});
        } else {
          next();
        }
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'internal server error', err });
    })
}