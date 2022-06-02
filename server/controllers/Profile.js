const errorHandler = require("../utils/errorHandler")
const Users = require("../models/Users")
const bcrypt = require('bcryptjs')
const User = require("../models/Users");


module.exports.changeProfile = async (req, res) => {
  try {
    if (req.body.name) {
      await Users.updateOne(
        {_id: req.user._id},
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
            birthday: req.body.birthday,
            phoneNumber: req.body.phoneNumber,
          }
        })
      res.status(200).json(req.body)
    } else {
      const candidate = await Users.findOne({_id: req.user._id})
      const profile = {
        name: candidate.name,
        email: candidate.email,
      }
      res.status(200).json(profile)
    }
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.changePassword = async (req, res) => {
  const candidate = await User.findOne({email: req.user.email})
  try {
    if (candidate){
      const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
      if (passwordResult){
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.newPassword
        const newPassword = await Users.updateOne(
            {_id: req.user._id},
            {
              $set: {
                password: bcrypt.hashSync(password, salt),
              }
            })
        res.status(201).json(newPassword)
      }else{
        res.status(404).json(false)
      }
    }

  } catch (e) {
    errorHandler(res, e)
  }
}