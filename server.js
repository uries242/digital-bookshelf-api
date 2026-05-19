require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const mongoose = require("mongoose");
// const Model = require("./models/Model.js");

//-- MIDDLEWARE --
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//-- ROUTES --
app.get("/", (req, res) => {
  res.send("Test Good!");
});



//-- PORT --
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});