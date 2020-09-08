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

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne("devoured", true, "id", req.params.id, function(result) {
        console.log(res);
        res.status(200).end();
    }); 
})

module.exports = router;