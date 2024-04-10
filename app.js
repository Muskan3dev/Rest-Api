const express = require("express");
const mongoose = require("mongoose");

const feedRoutes = require("./Routes/feed.js");

const bodyParser = require("body-parser");

const app = express();

//application/json parse
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://muskan:MgZONjF1FvkMLUuK@cluster6.kzpmnit.mongodb.net/messages?retryWrites=true&w=majority&appName=Cluster6"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
