const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "hk819zn2xp9inhii",
  password: "ok0yg97lbe9jhdby",
  database: "pz1ald4bxxsulh39"
});


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
