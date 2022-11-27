const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASSWORD,
  port    :'3306',
  database: "puzzoh_database",
})

module.exports = db
