const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger_name: data
      };
      
      res.render("index", hbsObject);
    });
  });

router.post("/api/burgers", function(req, res) {
  console.log("controller")  
  console.log(req.body.burger_name)
    
    burger.create([req.body.burger_name], 
    function(result) {
      res.json({ id: result.insertID })
    })
})





module.exports = router;