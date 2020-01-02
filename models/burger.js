const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },

    create: function(tableInput, cb){
        orm.insertOne("burgers", function(res){
            cb(res);
        })
    }

}

module.exports = burger;