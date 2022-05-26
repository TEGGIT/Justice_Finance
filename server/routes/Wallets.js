const express = require('express')
const controller = require('../controllers/Wallets')
const passport = require("passport");
const router = express.Router()

router.get('/"', passport.authenticate('jwt', {session: false}), controller.getWallets)

router.post('/create', passport.authenticate('jwt', {session: false}), controller.createWallets)

router.patch('/update',passport.authenticate('jwt', {session: false}), controller.updateWallets)

router.delete('/remove',passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router