const {Router} = require('express')
const router = Router()
const {todoControllers} = require('../controllers/todos.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/todos', todoControllers.getAllTodos)
router.post('/todos' , authMiddleware, todoControllers.addTodo)
router.delete('/todos/:id' , authMiddleware, todoControllers.deleteTodo)

module.exports = router