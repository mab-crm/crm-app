const mysql = require("mysql");

// Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crm",
});

module.exports = db;
