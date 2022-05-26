const User = require('../models/Users')
const Wallets = require('../models/Wallets')
const errorHandler = require('../utils/errorHandler')


module.exports.getWallets = async function (req, res) {
  try {
    const wallets = await Wallets.find({wallets: req.user.id})
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

  const candidate = await User.findOne({_id: req.user._id})

  const wallets = new Wallets({
    currency: req.body.currency,
    purseNumber: req.body.purseNumber,
    sum: req.body.sum,
    wallets: candidate._id

  })

  try {
    await wallets.save()
    res.status(201).json(wallets)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.updateWallets = async function (req, res) {
  const updated = {
    sum: req.body.sum
  }
  try {
    const wallets = await Wallets.findOneAndUpdate(
      {currency: req.body.currency},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(wallets)
  } catch (e) {
    errorHandler(res, e)
  }
}
