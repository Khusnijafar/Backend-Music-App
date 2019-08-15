const scoreModels = require('../models/scores')
const miscHelpers = require('../helpers/helpers')
const jwt = require('jsonwebtoken')

module.exports = {
    insertScore: (req, res) => {
        const { id_user, score } = req.body
        const data = { id_user, score}

        scoreModels.insertScore(data)
        .then((resultScore) => {
            const result = resultScore
            miscHelpers.response(res, result, 200, data)
        })
        .catch((error) => {
            console.log(error);
        })
    },
    getListScore: (req, res) => {
        const page = req.query.page
        scoreModels.getListScore(page)
        .then((resultScore) => {
            const result = resultScore
            miscHelpers.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err);
        })
    },
    getScoreById: (req, res) => {
        const id_user = req.params.id_user
        scoreModels.getScoreById(id_user)
        .then((resultScore) => {
            const result = resultScore
            miscHelpers.response(res, result, 200)
        })
        .catch((error) => {
            console.log(error);
        })
    }
}