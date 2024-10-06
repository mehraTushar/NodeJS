const express = require("express");

const app = express();

app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  res.send(`Got the UserId ==> ${userId}`);
});

app.get("/user", (req, res) => {
  const { userName, age } = req.query;
  console.log(userName, age);

  if (userName && age)
    res.send(`got the userName ==> ${userName} and Age ==> ${age}`);
  else if (userName) res.send(`got the userName ==> ${userName}`);
  else if (age) res.send(`got the age ==> ${age}`);
  else res.send("no params Passed sending    nothing");
});

app.post("/user", (req, res) => {
  res.send("Post request To Users");
});

app.delete("/user", (req, res) => {
  res.send("Deleted the user");
});

app.listen(7777, () => {
  console.log("server Started");
});
