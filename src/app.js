import express from "express";
import { AdminAuth, UserAuth } from "./middleware/auth.js";
import { dbConnection } from "./config/db.js";
import { userModel } from "./model/user.js";

const app = express();

app.post("/signup", async (req, res) => {
  var newUserObj = {
    firstName: "Tushar",
    lastName: "Mehra",
    age: 23,
    email: "tushar78628@gmail.com",
  };

  try {
    var user = new userModel(newUserObj);
    await user.save();
    res.send("user SignUp successfully");
  } catch (err) {
    res.send(`internal server error ==> ${err.message}`);
  }
});

dbConnection()
  .then(() => {
    console.log("DB Connection Successful");
    app.listen(7777, () => {
      console.log("server Started");
    });
  })
  .catch((err) => console.log(err));
