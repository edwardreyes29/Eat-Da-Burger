const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.name, function(result) {
        res.status(200).end();
    }); 
})

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne("devoured", true, "id", req.params.id, function(result) {
        res.status(200).end();
    }); 
})

router.get("/api/burgers/devoured", function(req, res) {
    burger.allDevoured("devoured", false, function(data) {
        res.json(data);
    });
})

module.exports = router;