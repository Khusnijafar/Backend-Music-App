const userModels = require('../models/users')
const miscHelpers = require('../helpers/helpers')
const jwt = require('jsonwebtoken')

module.exports = {
    getUser: (req, res) => {
        const search = req.query.search
        userModels.getUser(search)
            .then((resultUser) => {
                const result = resultUser
                console.log(result)
                miscHelpers.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            }) 
    },
    register: (req, res) => {
        const salt = miscHelpers.generateSalt(18)
        const passwordHash = miscHelpers.setPassword(req.body.password, salt)
        const data = {
            email: req.body.email,
            fullname: req.body.fullname,
            password: passwordHash.passwordHash,
            salt: passwordHash.salt,
            token: '',
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }
        userModels.register(data)
            .then((resultRegister) => {
                miscHelpers.response(res, resultRegister, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    login: (req, res) => {
        const email = req.body.email
        const password = req.body.password
        userModels.getByEmail(email)
            .then((result) => {
                const dataUser = result[0]
                const userPassword = miscHelpers.setPassword(password, dataUser.salt).passwordHash
                if(userPassword === dataUser.password) {
                    dataUser.token = jwt.sign({
                        userid: dataUser.id_user
                    }, process.env.SECRET_KEY, { expiresIn: '7d'})
                    delete dataUser.salt
                    delete dataUser.password
                    return miscHelpers.response(res, dataUser, 200)
                } else {
                    return miscHelpers.response(res, null, 403, 'Wrong Password')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },
    updateUser: (req, res) => {
        const id_user = req.params.id_user
        const { fullname } = req.body
        const data = {
            fullname,
            updated_at: new Date()
        }
        userModels.updateUser(id_user, data)
            .then((resultUser) => {
                const result = resultUser
                miscHelpers.response(res, result, 200, [id_user, data])
            })
            .catch((error) => {
                console.log(error)
            })
    },
    insertUser: (req, res) => {
        const { fullname } =req.body
        const data = {
            fullname
        }
        userModels.insertUser(data)
            .then((resultUser) => {
                const result = resultUser
                miscHelpers.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    deleteUser: (req, res) => {
        const id_user = req.params.id_user
        userModels.deleteUser(id_user)
            .then((resultUser) => {
                const result = resultUser
                miscHelpers.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
} 