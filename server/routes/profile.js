const express = require('express')
const controller = require('../controllers/Profile')
const passport = require("passport");
const router = express.Router()


router.patch('/', passport.authenticate("jwt", {session: false}), controller.changeProfile)


module.exports = router
