var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    res.redirect("/burgers")
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    console.log(data);
    // var hbsObject = {
    //   burgers: data
    // };
    // console.log(hbsObject);
    // res.render("index", hbsObject);
    res.render("index", {burger:data});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(
    req.body.toppings, function(result) {
      console.log(result);
      res.redirect('/');
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    sleepy: req.body.devouered
  }, condition, function(result) {
    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
     
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
