const orm = require("../config/orm.js");
const burger = {
    // Select all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Create a new burger
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    // Update a row
    updateOne: function(col1, val1, col2, val2, cb) {
        orm.updateOne("burgers", col1, val1, col2, val2, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;