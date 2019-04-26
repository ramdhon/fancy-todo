const User = require('../models/user');

const jwt = require('../helpers/jwt');


class Controller {
  static authuser(req, res) {
    let decoded = jwt.verify(req.headers.token, process.env.SECRET_JWT);
    User.findById(decoded.id)
    .populate('todolist')
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }

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
    .populate('todolist')
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
            email: req.body.email
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


  static signInGoogle(req, res) {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        // console.log('FOUND USER >>> ', user)
        if(!user) {
          return User.create({
            name: req.body.name,
            email: req.body.email,
            password: ''
          })
        } else {
          return user;
        }
      })
      .then(user => {
        // console.log('USER >>> ', user);
        let token = jwt.sign({
          id: user.id,
          email: user.email
        })
        // console.log('TOKEN >>> ', token);
        res.status(200).json({ message: 'login success', status: 1, token });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err);
      })
  }

  static signIn(req, res) {
    User.findOne({
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        if(!user) {
          res.status(401).json({ message: 'email/password invalid', status: 0 })
        } else {
          let token = jwt.sign({
            id: user.id,
            email: user.email
          })
          res.status(200).json({ message: 'login success', status: 1, token })
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }

  static signUp(req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      todolist: []
    })
      .then(newUser => {
        let token = jwt.sign({
          id: newUser.id,
          email: newUser.email
        })
        res.status(201).json({ message: 'successfully created', status: 1, token, newUser });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;