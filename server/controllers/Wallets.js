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

module.exports.getByIdWallets = async function (req, res) {
  try {
    const wallets = await Wallets.findById(req.params.currency)
    res.status(200).json(wallets)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await Wallets.remove({currency: req.body.currency})
    res.status(200).json({
      message: 'Кошелёк удален'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createWallets = async function (req, res) {
  try {
    const createWallet = {
      wallets: [
        {
          currency: req.body.wallets[0].currency,
          purseNumber: req.body.wallets[0].purseNumber,
          sum: req.body.wallets[0].sum
        }
      ]
    }

   if (createWallet.wallets[0].currency !== req.body.wallets[0].currency){
    res.status(404).json('нельзя')
   }else{

     const wallet = await Users.findOneAndUpdate(
       {_id: req.user._id},
       {$set: createWallet},
       {new: true}
     )
     const newWallets = {
      ...wallet.wallets,
       wallets: [...createWallet.wallets, {currency: req.body.wallets[0].currency, numberPurse: req.body.wallets[0].purseNumber, sum: 0}]
     }
     res.status(200).json(wallet)
   }

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.updateWallets = async function (req, res) {

}
