const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res, next) => {
  const { token } = req.headers;
  console.log("token", token);
  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded) {
      const userID = decoded.userID;
      req.body.userID = userID;

      next();
    } else {
      res.send("Please login");
    }
  } else {
    res.send("Please login");
  }
};

module.exports = { authenticate };