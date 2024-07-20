const jwt = require("jsonwebtoken");
const KEY = require("../secret");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const requestToken = req.headers.authorization;
  const words = requestToken.split(" ");
  const token = words[1];
  const decoded = jwt.verify(token, KEY.KEY);
  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else
    res.status(401).json({
      msg: "Authentication Failed!",
    });
}

module.exports = userMiddleware;
