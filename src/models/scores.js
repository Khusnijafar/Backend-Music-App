require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    insertScore: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO score SET ?', data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getListScore: (page) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT user.fullname, score.score FROM score INNER JOIN user ON user.id_user = score.id_user ORDER BY score DESC LIMIT 10 OFFSET 0`, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getScoreById: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT user.fullname, score.score FROM score INNER JOIN user ON user.id_user = score.id_user WHERE user.id_user = ? ORDER BY score DESC LIMIT 1 OFFSET 0`, id_user, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}