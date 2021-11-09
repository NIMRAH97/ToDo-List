const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./Routes/User/user");
const app = express();

mongoose.connect(process.env.MONGO_DB, () => {
  console.log("Mongo DB connected");
});
app.use(express.json());

app.use("/user", userRoutes);
app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

module.exports = app;
