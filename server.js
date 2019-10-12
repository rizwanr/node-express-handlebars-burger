
const path = require('path');

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.pp.use(express.static("public"));
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());




// Make use of the body-parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static directory reference path
app.use(express.static(path.join(__dirname, 'public'))); 

// Set Handlebars.


app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});