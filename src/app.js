const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.end("this is the Test Route");
});

app.use("/hello", (req, res) => {
  res.end("this is the Hello Route");
});
app.use("/", (req, res) => {
  res.end("home Page");
});
app.listen(7777, () => {
  console.log("server Started");
});
