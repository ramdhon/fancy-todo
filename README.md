# fancy-todo app
Fancy-Todo RESTAPI built with Express and Mongoose

List of user routes:
| Route      | HTTP   | Description         |
|------------|--------|---------------------|
| /todos     | GET    | Get all todos       |
| /todos     | POST   | Created a todo      |
| /todos/:id | GET    | Get a todo by id    |
| /todos/:id | PUT    | Update a todo by id |
| /todos/:id | DELETE | Delete a todo by id |

## Usage
Make sure you have Node.js and npm installed in your computer and then run these commands:
```console
$ npm install
$ npm start
```
Make sure you have set all required your .env parameters 
<br>(keys reference: .env_example)

Access the RESTAPI via `http://localhost:3000/todos`