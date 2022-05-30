const express = require('express')
const controller = require('../controllers/transaction')
const passport = require("passport");
const router = express.Router()


router.patch('/', passport.authenticate('jwt', {session: false}), controller.getTransaction)



module.exports = router
