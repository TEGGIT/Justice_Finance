const express = require('express')
const controller = require('../controllers/Profile')
const passport = require("passport");
const router = express.Router()


router.patch('/', passport.authenticate("jwt", {session: false}), controller.changeProfile)
router.patch('/changePassword', passport.authenticate("jwt", {session: false}), controller.changePassword)



module.exports = router
