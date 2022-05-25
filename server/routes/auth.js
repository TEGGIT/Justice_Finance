const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()

router.post('/login-page', controller.login)

router.post('/register-page', controller.register)

module.exports = router