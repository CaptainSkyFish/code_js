const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_secret = require("../config.js");
// Middleware for handling auth
const adminMiddleware = (authKey) => async (req, res, next) => {
  const token = authKey.split(" ")[1];
  if (!token) {
    return res.status(403).json({ msg: "Unauthorized Access!" });
  }

  jwt.verify(token, JWT_secret, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "Forbidden: Invalid Token!" });

    req.user = decoded;
    next();
  });
};

module.exports = adminMiddleware;
