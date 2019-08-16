require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'remotemysql.com',
    user: process.env.DB_USER || 'hucrYvdCpN',
    password: process.env.DB_PASS || 'sOF03EnqCt',
    database: process.env.DB_NAME || 'hucrYvdCpN'
})

connection.connect((err) => {
    if (err) console.log(`Error: ${err}`);    
})

module.exports = connection