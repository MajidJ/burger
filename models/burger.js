const orm = require(__dirname + "/../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    one: function(id, cb) {
        orm.selectOne("burgers", id, function(res) {
            cb(res);
        });
    },
    create: function(burgerName, cb) {
        orm.insertOne("burgers", burgerName, function(res) {
            cb(res);
        });
    },
    update: function(burgerDevouredValue, burgerId, cb) {
        orm.updateOne("burgers", burgerDevouredValue, burgerId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;