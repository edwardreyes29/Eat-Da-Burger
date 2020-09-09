const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        const hbsObject = {
            burgers: data
        };
        // console.log(hbsObject)
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.name, function(result) {
        // console.log(res);
        res.status(200).end();
    }); 
})

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne("devoured", true, "id", req.params.id, function(result) {
        // console.log(res);
        res.status(200).end();
    }); 
})

router.get("/api/burgers/devoured", function(req, res) {
    burger.allDevoured("devoured", false, function(data) {
        // console.log(res);
        // console.log(data);
        res.json(data);
        // res.send(res);
    })
})

module.exports = router;