const express = require('express')
const controller = require('../controllers/exchangeRates')
const router = express.Router()

router.get('/', controller.exchangeRates)

// router.post('/create', controller.createExchange)




module.exports = router