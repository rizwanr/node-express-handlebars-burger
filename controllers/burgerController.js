var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      //the object we pass to the handlebar
      burger: data
    };
    console.log(hbsObject);

    res.render("index", hbsObject);

  });
});

router.get("/api/burgers", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      //the object we pass to the handlebar
      burger: data
    };
    console.log(hbsObject);

    res.send(hbsObject);

  });
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body)
  /*
  Tested in postman
  {
              "name": "Tuna burger",
              "devoured": 0
  } 

  Result from 
  {
      "result": {
          "fieldCount": 0,
          "affectedRows": 1,
          "insertId": 7,
          "serverStatus": 2,
          "warningCount": 0,
          "message": "",
          "protocol41": true,
          "changedRows": 0
      }
  }

  */


  burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {
    // Send back the ID of the new quote
    res.json({
      result
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;