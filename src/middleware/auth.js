export const AdminAuth = (req, res, next) => {
  try {
    var token = "qwerty!@#";

    var isAuthenticated = token === "qwerty!@#";
    if (!isAuthenticated) res.status(500).send("Not Authenticated");

    next();
  } catch (err) {
    res.status(500).send(`got an error Please content Dev Team ${err}`);
  }
};

export const UserAuth = (req, res, next) => {
  try {
    var token = "qwerty!@#";
    var isAuthenticated = token === "qwerty!@#";
    console.log(isAuthenticated);
    if (!isAuthenticated) res.status(500).send("Not Authenticated");

    next();
  } catch (err) {
    res.status(500).send(`got an error Please content Dev Team ${err}`);
  }
};
