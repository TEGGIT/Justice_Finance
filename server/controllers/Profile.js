const errorHandler = require("../utils/errorHandler")
const Users = require("../models/Users")

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
        password: candidate.password
      }
      res.status(200).json(profile)
    }
  } catch (e) {
    errorHandler(res, e)
  }
}