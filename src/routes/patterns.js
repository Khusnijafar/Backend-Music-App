var express = require('express')
var router = express.Router()
const patternController = require('../controllers/pattern')
const Auth = require('../helpers/auth')

router
    .all('/*', Auth.authInfo)
    .get('/', patternController.getPattern)
    .post('/', patternController.insertPattern)

module.exports = router