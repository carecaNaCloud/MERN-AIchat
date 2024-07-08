import jwt from "jsonwebtoken";
import { AUTH_COOKIE } from "./constants.js";
import { NextFunction, Request, Response } from "express";

export const createToken = (id: string, email: string, expiresIn: string | number) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  return token;
};

export const verifyToken = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  const token = req.signedCookies[`${AUTH_COOKIE}`];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }
  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if(err) {
        reject(err.message);
        return res.status(401).json({ message: "Invalid Token" });
      } else {
        resolve();
        res.locals.jwtData = decoded;
        return next();
      }
    })
  })
}

// return new Promise<void>((resolve, reject) => {
//   return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
//     if (err) {
//       reject(err.message);
//       return res.status(401).json({ message: "Token Expired" });
//     } else {
//       resolve();
//       res.locals.jwtData = success;
//       return next();
//     }
//   })
// })