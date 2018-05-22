require("dotenv").config();
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.DB_PW,
        database: "burgers_db"
    });
}




connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected on thread " + connection.threadId);
    }
});

module.exports = connection;