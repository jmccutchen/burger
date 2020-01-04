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
    
    burger.create([req.body.burger_name], 
    function(result) {
      res.json({ id: result.insertID })
    })
})

router.put("/api/burgers/:id", function(req, res) {
  let burgerID = req.params.id;

  console.log("burgerID ", burgerID);

  burger.update(burgerID, {
    devoured: req.body.devoured
  }, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});





module.exports = router;