const User = require('../models/user');

class Controller {
  static all(req, res) {
    User.find({})
    .populate('todolist')
      .then(users => {
        if (users.length === 0) {
          res.status(204).json({ message: 'data empty' })
        } else {
          res.status(200).json(users);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }
  
  static create(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(newUser => {
        res.status(201).json({ message: 'successfully created', newUser });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }
  
  static one(req, res) {
    User.findById(req.params.id)
      .then(user => {
        if (!user) {
          res.status(204).json({ message: 'data empty' })
        } else {
          res.status(200).json(user);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }

  static update(req, res) {
    User.findById(req.params.id)
      .then(user => {
        if (!user) {
          res.status(204).json({ message: 'data not found to update' })
        } else {
          return user.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          })
        }
      })
      .then(updatedUser => {
        res.status(200).json({ message: 'successfully updated', updatedUser });
      })  
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }

  static delete(req, res) {
    let deletedUser = null;
    User.findById(req.params.id)
      .then(user => {
        if (!user) {
          res.status(204).json({ message: 'data not found to delete' })
        } else {
          deletedUser = user;
          return user.delete()
        }
      })
      .then(() => {
        res.status(200).json({ message: 'successfully deleted', deletedUser});
      })  
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;