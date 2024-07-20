const JWT_TOKEN = require("./config");
const jwt = require("jsonwebtoken");
function auther(req, res, next) {
  const received = req.headers.authorization;

  const divided = received.split(" ");
  const startsWith = divided[0];
  const token = divided[1];

  if (received && startsWith == "Bearer") {
    try {
      const decoded = jwt.verify(token, JWT_TOKEN);
      if (decoded.userID) {
        req.userID = decoded.userID;
        next();
      } else {
        return res.status(403).json({ msg: "Invalid Token." });
      }
    } catch (err) {
      return res.status(403).json({ msg: "Invalid Token." });
    }
  } else {
    return res.status(403).json({ msg: "Invalid Token." });
  }
}

module.exports = { auther };
