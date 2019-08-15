var express = require('express')
var router = express.Router()
const scoreController = require('../controllers/scores')
const Auth = require('../helpers/auth')

router
    .all('/*', Auth.authInfo)
    .get('/', scoreController.getListScore)
    .post('/', scoreController.insertScore)
    .get('/:id_user', scoreController.getScoreById)

module.exports = router