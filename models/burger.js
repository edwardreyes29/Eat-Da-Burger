const orm = require("../config/orm.js");
orm.selectAll("burgers");
orm.insertOne("burgers", "burger_name", "Charburger");
orm.updateOne("burgers", "devoured", false, "id", 4);

const burger = {
    // Select all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Create a new burger
    insertOne: function(col, val, cb) {
        orm.create("burgers", col, val, function(res) {
            cb(res);
        });
    },
    // Update a row
    updateOne: function(col1, val1, col2, val2, cb) {
        orm.create("burgers", col1, val1, col2, val2, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;