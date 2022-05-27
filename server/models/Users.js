const mongoose = require('mongoose')
const {type} = require("@testing-library/user-event/dist/type");

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
      }}
  ]
})

module.exports = mongoose.model('users', userSchema)