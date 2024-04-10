const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const feedRoutes = require("./Routes/feed.js");

const bodyParser = require("body-parser");

const app = express();

//application/json parse
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

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
