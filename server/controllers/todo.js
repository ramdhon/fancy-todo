const Todo = require('../models/todo');

class Controller {
  static all(req, res) {
    Todo.find({})
      .then(todos => {
        if (todos.length === 0) {
          res.status(204).json({ message: 'data empty' })
        } else {
          res.status(200).json(todos);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }

  static create(req, res) {
    Todo.create({
      //...
    })
      .then(newTodo => {
        res.status(201).json({ message: 'successfully created', newTodo });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }
  
  static one(req, res) {
    Todo.findById(req.params.id)
    .then(todo => {
      if (!todo) {
        res.status(204).json({ message: 'data empty' })
      } else {
        res.status(200).json(todo);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  }

  static update(req, res) {
    Todo.findById(req.params.id)
      .then(todo => {
        if (!todo) {
          res.status(204).json({ message: 'data not found to update' })
        } else {
          return todo.update({
            //...
          })
        }
      })
      .then(updatedTodo => {
        res.status(200).json({ message: 'successfully updated', updatedTodo });
      })  
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }

  static delete(req, res) {
    let deletedTodo = null;
    Todo.findById(req.params.id)
      .then(todo => {
        if (!todo) {
          res.status(204).json({ message: 'data not found to delete' })
        } else {
          deletedTodo = todo;
          return todo.delete()
        }
      })
      .then(() => {
        res.status(200).json({ message: 'successfully deleted', deletedTodo});
      })  
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  }
}


module.exports = Controller;