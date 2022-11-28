const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password123",
  database: "puzzohwebportal",
})

module.exports = db
