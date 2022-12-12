const express = require('express');
const app = express();
const userController = require('../controllers/userController');
const router = express.Router(); //MiddleWare router

router
.route('/signup')
.post(userController.signup)
router
.route('/login')
.post(userController.login)

module.exports = router;