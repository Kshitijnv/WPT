//import libraries
const express = require("express");
var router = express.Router();
//getting db connection from singleton js dbConnection
var connection = require("../dbUtils/dbConnection");

//route mapping for index page
router.get("/home", function (req, resp) {
  connection.query("select * from employees", function (err, result) {
    if (err) {
      console.error("error occured", err);
      resp
        .status(500)
        .send(
          "<h2>Internal Server Error, please try again in some time!!!1</h2>"
        );
    } else {
      console.log(result);
      resp.render("home", { empData: result });
      //LogicalViewName: index
      //ActualViewName: /views/index.ejs
    }
  });
});
module.exports = router;
