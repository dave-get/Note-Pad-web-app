import { body } from "express-validator";
import { User } from "../models/user.model.js";

export const registerValidation = [
  body("username")
    .notEmpty()
    .custom(async (value) => {
      const existingUser = await User.findOne({ name: value });
      console.log(existingUser);
      if (existingUser) {
        throw new Error("A user already exists with this username");
      }
    }),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const existingUser = await User.findOne({ name: value });
      console.log(existingUser);
      if (existingUser) {
        throw new Error("A user already exists with this username");
      }
    }),
  body("password").isLength({ min: 6 }),
];
export const loginValidation = [
  body("username").notEmpty(),
  body("password").isLength({ min: 6 }),
];

export const noteValidation = [
  body("title").notEmpty(),
  body("content").notEmpty(),
];
export const updateNoteValidation = [
  body("id").notEmpty(),
  body("title").notEmpty(),
  body("content").notEmpty(),
];
export const deleteNoteValidation = [body("id").notEmpty()];
