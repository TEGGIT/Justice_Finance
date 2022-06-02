const exchangeRates = require('../models/ExchangeRates')
const errorHandler = require('../utils/errorHandler')




module.exports.exchangeRates = async function (req, res) {
  try {

    const currentExchangeRates = await exchangeRates.find({})

    res.status(200).json(currentExchangeRates)
  } catch (e) {
    errorHandler(res, e)
  }
}



// module.exports.createExchange = async function (req, res) {
//   try {
//       const ExchangeRates = new exchangeRates({
//         exchangeRates: [...req.body.exchangeRates]
//
//       }
//       )
//     ExchangeRates.save()
//       res.status(201).json(req.body)
//
//   } catch (e) {
//     errorHandler(res, e)
//   }
//
// }