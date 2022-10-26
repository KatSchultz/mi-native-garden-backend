import express from "express";
import {
  addPlant,
  deletePlant,
  getPlant,
  getPlants,
  getPlantsByCriteria,
  getPlantsByUid,
  updatePlant,
} from "../controllers/plant.controller";

export const plantRouter = express.Router();

plantRouter.route("/").get(getPlants).post(addPlant).get(getPlantsByCriteria);

plantRouter
  .route("/:id")
  .get(getPlant)
  .get(getPlantsByUid)
  .patch(updatePlant)
  .delete(deletePlant);
