const patternModels = require('../models/pattern')
const miscHelpers = require('../helpers/helpers')

module.exports = {
    insertPattern: (req, res) => {
        const { pattern, delay, level, poinplus } = req.body
        const data = { pattern, delay, level, poinplus }

        patternModels.insertPattern(data)
        .then((resultPattern) => {
            const result = resultPattern
            miscHelpers.response(res, result, 200, data)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    getPattern: (req, res) => {
        patternModels.getPattern()
        .then((resultPattern) => {
            const result = resultPattern
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}