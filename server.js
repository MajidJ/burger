require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PW,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected on thread " + connection.threadId);
    }
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, data) {
        if (err) throw err;
        return res.render("index", { data : data });
    });
});

app.get("api/:id?", function(req, res) {
    if (req.params.id) {
        connection.query("SELECT * FROM burgers WHERE id=?", [req.params.id], function(err, data) {
            if (err) throw err;
            return res.json(data);
        })
    } else {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            return res.json(data);
        })
    }
})

app.post("/api/new", function(req, res) {
    connection.query("INSERT INTO burgers (burger, devoured) VALUES (?, ?)", [req.body.burger, false], function(err, data) {
        if (err) throw err;
        console.log("Added new burger");
    })
});

app.put("/api/:id", function(req, res) {
    connection.query("UPDATE burgers SET devoured=true WHERE id=?", [req.params.id], function(err, data) {
        if (err) throw err;
        console.log("Devoured boolean updated");
    })
})

app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});
