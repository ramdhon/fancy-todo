# fancy-todo app
Fancy-Todo REST API built with Express and Mongoose

List of user routes:
| Route           | HTTP   | Description                                   |
|-----------------|--------|-----------------------------------------------|
| /todos          | GET    | Get all todos (only authenticated user)       |
| /todos          | POST   | Create a todo (only authenticated user)       |
| /todos/:id      | GET    | Get a todo by id (only authenticated user)    |
| /todos/:id      | PUT    | Update a todo by id (only authenticated user) |
| /todos/:id      | DELETE | Delete a todo by id (only authenticated user) |
| /users/user     | GET    | Get authenticated user info (only auth user)  |
| /users          | GET    | Get all users (only authenticated user)       |
| /users          | POST   | Create a user (only authenticated user)       |
| /users/:id      | GET    | Get a user by id (only authenticated user)    |
| /users/:id      | PUT    | Update a user by id (only authenticated user) |
| /users/:id      | DELETE | Delete a user by id (only authenticated user) |
| /google-sign-in | POST   | Sign in with google account                   |
| /sign-in        | POST   | Normal sign in                                |
| /sign-up        | POST   | Normal sign up                                |

## Usage
Make sure you have Node.js and npm installed in your computer and then run these commands:
```console
$ npm install
$ npm start
```
Make sure you have set all required your .env parameters 
<br>(keys reference: .env_example)

Access the REST API via `http://localhost:3000`