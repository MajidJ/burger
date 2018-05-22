const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require(__dirname +  "/../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        return res.render("index", { data : data });
    });
});

router.get("/api/:id?", function(req, res) {
    if (req.params.id) {
        burger.one(req.params.id, function(data) {
            return res.json(data);
        });
    } else {
        burger.all(function(data) {
            return res.json(data);
        });
    }
});

router.post("/api/new", function(req, res) {
    burger.create(req.body.burger, function(data) {
        return res.json(req.body);
    });
});

router.put("/api/:id", function(req, res) {
    burger.update(req.body.devoured, req.params.id, function(data) {
        return res.json(req.body);
    });
});

module.exports = router;