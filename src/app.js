import express from "express";
import { AdminAuth, UserAuth } from "./middleware/auth.js";

const app = express();

app.use("/admin", AdminAuth);

app.get("/user/login", (req, res) => {
  res.send("userLoged in successfully");
});

app.use("/user", UserAuth);

app.get("/user/data", (req, res) => {
  try {
    res.send("User Data Send Successfully");
  } catch (err) {
    res.status(500).send(`got an error Please content Dev Team ${err}`);
  }
});

app.get("/admin/getAdminData", (req, res) => {
  try {
    res.send("Admin User Data Send Successfully");
  } catch (err) {
    res.status(500).send(`got an error Please content Dev Team ${err}`);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Something broke! ${err}`);
});

app.listen(7777, () => {
  console.log("server Started");
});
