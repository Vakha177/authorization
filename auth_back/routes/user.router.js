const {usersControllers} = require('../controllers/user.controller')

const {Router} = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router()

router.get('/users', authMiddleware,usersControllers.getAllUsers)
router.post('/auth' , usersControllers.registerUser)
router.post('/login' , usersControllers.login)

module.exports = router
