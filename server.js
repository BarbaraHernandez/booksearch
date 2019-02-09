const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

const Book = require("./models/bookModel");
console.log('Info - __dirname: ' + __dirname);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")

// Define API routes here
app.use(routes);

// Send every non-API request to the React app
// also for any routes that are not found.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
