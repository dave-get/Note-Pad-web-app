import jwt from "jsonwebtoken";
import fs from "node:fs";
import { Request, Response, Router } from "express";
import { User } from "../models/user.model.js";
import {
  loginValidation,
  registerValidation,
} from "../middleware/validation.js";
import { validationResult } from "express-validator";

var privateKey = fs.readFileSync("private.key");

const auth = Router();

auth.post("/login", loginValidation, async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401).json({ success: false, message: "Invalid username" });
    return;
  } else {
    let cmp = await user.comparePassword(password);
    if (!cmp) {
      res.status(401).json({ success: false, message: "Invalid password" });
      return;
    } else {
      const token = jwt.sign({ id: user._id, username: user.username, role: "user" }, privateKey, {
        algorithm: "RS256",
      });
      res.json({ success: true, message: "Login Success", authToken: token });
    }
  }
});

auth.post(
  "/register",
  registerValidation,
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id, username, role: "user" }, privateKey, {
      algorithm: "RS256",
    });
    res.json({ message: "User created", authToken: token });
  }
);

export default auth;
