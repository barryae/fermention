const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

//Mongo DB
<<<<<<< HEAD
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);
=======
mongoose.connect(process.env.MONGODB_URI)
//mongoose.connect("mongodb://localhost/fermention", { useNewUrlParser: true })
>>>>>>> 5ce3a0158955e31956de6f35d44755d599a344b3

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
