import express from "express";
import {
  addPlant,
  deletePlant,
  getPlant,
  getPlants,
  getPlantsByUid,
  updatePlant,
} from "../controllers/plant.controller";

export const plantRouter = express.Router();

plantRouter.route("/").get(getPlants).post(addPlant);

plantRouter
  .route("/:id")
  .get(getPlant)
  .get(getPlantsByUid)
  .patch(updatePlant)
  .delete(deletePlant);
