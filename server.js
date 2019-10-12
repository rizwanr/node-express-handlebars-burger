var express = require("express");



var app = express();
var path = require('path')
// Serve static content for the app from the "public" directory in the application directory.pp.use(express.static("public"));
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

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