const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_02lg0ndq:v33ooh26m7tm7nnmqak9hdtspm@ds013475.mlab.com:13475/heroku_02lg0ndq",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});
