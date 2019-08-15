var express = require('express')
var router = express.Router()
const soundController = require('../controllers/sound')
const Auth = require('../helpers/auth')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage})

router
    .all('/*', Auth.authInfo)
    .get('/', soundController.getSound)
    .post('/', upload.single('sound'),soundController.insertSound)

module.exports = router