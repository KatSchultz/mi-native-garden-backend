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

//ORDER MATTERS WHEN ADDING ROUTES

export const plantRouter = express.Router();

plantRouter.route("/").get(getPlants).post(addPlant);

plantRouter.route("/search").get(getPlantsByCriteria);

plantRouter
  .route("/:id")
  .get(getPlant)
  .get(getPlantsByUid)
  .patch(updatePlant)
  .delete(deletePlant);
