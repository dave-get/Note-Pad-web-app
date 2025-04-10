import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";

interface AuthenticatedRequest extends Request {
  id?: string;
  user?: string;
}
export const jwtAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(401).json({ success: false, message: "Authorization token is missing" });
    return
  }
  var cert = fs.readFileSync('public.key');  
  jwt.verify(token, cert, (err, decoded) => {
    if (err) {
      res.status(403).json({ success: false, message: "Failed to authenticate token" });
      return
    }
    if (decoded && typeof decoded === "object") {
      req.user = decoded.username;
      req.id = decoded.id;
    } else {
      res.status(403).json({ success: false, message: "Token payload could not be processed" });
      return;
    }
    next();
  });
}