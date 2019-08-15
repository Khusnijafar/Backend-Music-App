require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
    getPattern: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM pattern', (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertPattern: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO pattern SET ?', data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}