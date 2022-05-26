const mongoose = require('mongoose')

const Schema = mongoose.Schema

const walletSchema = new Schema({
  currency: {
    type: String,
    required: true
  },
  purseNumber: {
    type: Number,
    required:true
  },
  sum: {
    type:Number,
    required:false
  },
  wallets: {
    ref:'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('wallet', walletSchema)