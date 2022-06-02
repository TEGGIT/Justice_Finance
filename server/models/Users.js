const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
    password: {
    type: String,
    required:true
  },
    name: {
    type:String,
    required:true
  },
  phoneNumber: {
    type:Number,
    required:false
  },
  city: {
    type:String,
    required:false
  },
  birthday:{
    type:String,
    required:false
  },
  wallets:[
    {
      currency: {
        type: String
      },
      purseNumber: {
        type: Number
      },
      sum:{
        type:Number
      }}],
  transaction:[
    {
      get:{
        type:String
      },
      Hour:{
        type:Number
      },
      Minutes:{
        type:Number
      },
      give:{
        type:String
      },
      giveValue:{
        type:Number
      },
      getValue:{
        type:Number
      }
    }
  ]
})

module.exports = mongoose.model('users', userSchema)