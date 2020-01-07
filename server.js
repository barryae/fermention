const express = require("express");
const mongoose = require("mongoose")
const routes = require("./routes")
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
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds359868.mlab.com:59868/heroku_sxtqqw6c");
=======
mongoose.connect(process.env.MONGODB_URI)
>>>>>>> e8f7e9fd2ed0fb35c0d9a57b5d498de55e9c0855

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
