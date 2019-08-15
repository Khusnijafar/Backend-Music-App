require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getSound: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM sound', (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertSound: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO sound SET ?', data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}