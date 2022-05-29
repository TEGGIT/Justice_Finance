const User = require('../models/Users')
const errorHandler = require('../utils/errorHandler')


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
    const wallets = await User.findById(req.params.currency)
    res.status(200).json(wallets)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await User.remove({currency: req.body.currency})
    res.status(200).json({
      message: 'Кошелёк удален'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createWallets = async function (req, res) {
  try {
    console.log(req.body.wallets)
    const createWallet = {
      wallets: [
        {
          currency: req.body.wallets[0].currency,
          purseNumber: req.body.wallets[0].purseNumber,
          sum: req.body.wallets[0].sum
        }
      ]
    }
    const newWallets= {
      ...createWallet,
      wallets: [
        ...createWallet.wallets,
        {currency: req.body.wallets[0].currency,
          purseNumber: req.body.wallets[0].purseNumber,
          sum: req.body.wallets[0].sum
        }]
    }

    const wallet = await User.findOneAndUpdate(
       {_id: req.user._id},
       {$set: newWallets},
       {new: true}
     )
 res.status(200).json(wallet)

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.updateWallets = async function (req, res) {

}
