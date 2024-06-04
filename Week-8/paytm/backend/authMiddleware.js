import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

export const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Unauthorized!",
    });
  }

  const token = authToken.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Error Authorizing Access",
      });
    }
    req.userId = decoded;
    next();
  });
};
