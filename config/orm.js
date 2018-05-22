const connection = require(__dirname + "/../config/connection.js");

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    selectOne: function(tableInput, burgerId, cb) {
        let queryString = "SELECT * FROM ?? WHERE id=?";
        connection.query(queryString, [tableInput, burgerId], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(tableInput, burgerName, cb) {
        let queryString = "INSERT INTO ?? (burger, devoured) VALUES (?, 0)";
        connection.query(queryString, [tableInput, burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(tableInput, burgerDevouredValue, burgerId, cb) {
        let queryString = "UPDATE ?? SET devoured=? WHERE id=?";
        connection.query(queryString, [tableInput, burgerDevouredValue, burgerId], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;