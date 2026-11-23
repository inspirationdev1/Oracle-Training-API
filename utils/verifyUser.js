import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  console.log("Token:", req.cookies?.access_token);

  console.log("Origin:", req.headers.origin);

  console.log("Cookie header:", req.headers.cookie);

  console.log("Parsed cookies:", req.cookies);

  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));
    req.user = user;
    next();
  });
};
