// Non-Prisma DB connection
const mysql = require('mysql')
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  connectionLimit: 50
})

module.exports = connection