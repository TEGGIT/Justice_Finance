const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const walletsRoutes = require('./routes/Wallets')
const transactionRoutes = require('./routes/transaction')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
  .then(()=> console.log('MongoDB connected.'))
  .catch(error => console.log(error))


app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())



app.use('/api/transaction', transactionRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/wallets', walletsRoutes)
app.use('/api/profile', profileRoutes)

module.exports = app