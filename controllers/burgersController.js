var express = require("express");

var router = express.Router();




var burger = require("../models/burger.js");
// Import the model (burger.js) to use its database functions.
// var burger = require("../config/orm");
// i could have used the above folder if i do not used model

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.all('burgers',function(data) {
//     console.log(data)
//     res.render("index", {burgers: data});
//   });
// });



router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render ("index", {burgers: data})  ;                   
    // ("index", hbsObject);
  });
});
module.exports = router;
