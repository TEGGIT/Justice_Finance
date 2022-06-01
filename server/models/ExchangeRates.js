const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exchangeRatesSchema = new Schema({

  exchangeRates:[
    {
      currencyName:{
        type: String
      },
      rubleRatio:{
        type: Number
      }
    }
  ]
})

module.exports = mongoose.model('exchangeRates', exchangeRatesSchema)