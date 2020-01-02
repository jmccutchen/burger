const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger_name: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/:burgerName", function(req, res) {
    console.log("route", req.params)
})





module.exports = router;