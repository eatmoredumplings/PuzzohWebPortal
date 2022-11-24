const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASSWORD,
  database: "puzzoh-portal",
})

module.exports = db
