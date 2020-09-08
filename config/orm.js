const connection = require("./connection.js");


// selectAll()
// insertOne()
// updateOne()
const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, colToInsert, valOfCol, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colToInsert, valOfCol], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, colToUpdate, valOfCol1, colToSearch, valOfCol2, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToUpdate, valOfCol1, colToSearch, valOfCol2], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;