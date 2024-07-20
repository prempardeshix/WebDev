// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { KEY } = require("../secret");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const requestToken = req.headers.authorization;
  const parts = requestToken.split(" ");
  const token = parts[1];
  const decoded = jwt.verify(token, KEY);
  // console.log(KEY.KEY, decoded);
  if (decoded.username) {
    next();
  } else {
    res.status(401).json({ msg: "Authentication Failed!" });
  }
}

module.exports = adminMiddleware;
