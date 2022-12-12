const express = require('express');
const app = express();
const TodoController = require('../controllers/TodoController');

const router = express.Router(); //MiddleWare router

router
.route('/')
.get(TodoController.getAllTodos)
.post(TodoController.createTodos)
router
.route('/:id')
.get(TodoController.getTodosById)
.put(TodoController.updateTodos)
.patch(TodoController.updateTodos)
.delete(TodoController.deleteTodos)

module.exports = router;