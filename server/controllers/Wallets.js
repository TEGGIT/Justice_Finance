const User = require('../models/Users')
const errorHandler = require('../utils/errorHandler')
const Users = require("../models/Users");


module.exports.getWallets = async function (req, res) {

  try {
    const wallets = await User.find({_id: req.user._id})
    res.status(200).json(wallets)
  } catch (e) {
    errorHandler(res, e)
  }
}

// module.exports.getByIdWallets = async function (req, res) {
//   try {
//     const wallets = await User.findById(req.params.currency)
//     res.status(200).json(wallets)
//   } catch (e) {
//     errorHandler(res, e)
//   }
// }

module.exports.remove = async function (req, res) {
  await User.findOneAndUpdate(
    {_id: req.user._id},
    {
      $set: {
        wallets: req.body.wallets
      }
    }
  )
  res.status(200).json(req.body.wallets)
}



module.exports.createWallets = async function (req, res) {
  try {
    if (req.body.wallets.length){
      await User.findOneAndUpdate(
          {_id: req.user._id},
          {$set: {
              wallets: req.body.wallets
            }},
      )
      res.status(200).json(req.body)
    }
    else {
      const candidate = await Users.findOne({_id: req.user._id})
      const wallet = {
        wallets: candidate.wallets
      }
      res.status(200).json(wallet)
    }
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.updateWallets = async function (req, res) {
  try {
    if (req.body.wallets.length){
      console.log(req.body.wallets)
      const newWallets = [...req.body.wallets]
      const wallet = await User.findOneAndUpdate(
          {_id: req.user._id},
          {$set: {
              wallets: newWallets
            }},
          {new: true}
      )
      res.status(200).json(wallet)
    }
    else {
      const wallet = await User.find({_id: req.user._id})
      res.status(200).json(wallet)
    }
  } catch (e) {
    errorHandler(res, e)
  }

}
