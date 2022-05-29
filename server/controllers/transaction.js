const User = require('../models/Users')
const errorHandler = require('../utils/errorHandler')

module.exports.getTransaction = async (req, res) => {
  try {

      const newTransaction = [...req.body.transaction]
      const transaction = await User.findOneAndUpdate(
          {_id: req.user._id},
          {$set: {
              transaction: newTransaction
            }},
          {new: true}
      )
      res.status(200).json(transaction)
  } catch (e) {
    errorHandler(res, e)
  }
}
