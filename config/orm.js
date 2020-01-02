const connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableInput, cb) {
        var queryString = "INSERT INTO burgers VALUES(" + tableInput + ")";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function () {

    }

};

module.exports = orm;