import express from "express";
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.route("/").get();
