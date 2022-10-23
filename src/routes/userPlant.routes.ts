import express from "express";
import {
  getUserPlants,
  addUserPlant,
  updateUserPlant,
  deleteUserPlant,
} from "../controllers/userPlant.controller";

export const userPlantRouter = express.Router();

userPlantRouter.route("/").get(getUserPlants).post(addUserPlant);

userPlantRouter.route("/:id").patch(updateUserPlant).delete(deleteUserPlant);
