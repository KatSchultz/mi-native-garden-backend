import express from "express";
import {getUsers, getUser, addUser, updateUser, deletUser} from 

export const userRouter = express.Router();

userRouter.route('/').get()