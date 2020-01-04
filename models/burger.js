const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },

    create: function(tableInput, cb){
        orm.insertOne(tableInput, function(res){
            
            cb(res);
        })
    },

    update: function(id, devoured, cb){
        orm.updateOne(id, devoured, function(res){
            cb(res);
            
        })
    }

}

module.exports = burger;