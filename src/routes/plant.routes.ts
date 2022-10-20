import express from "express";
import {
  addPlant,
  deletePlant,
  getPlant,
  getPlantsByUid,
  updatePlant,
} from "../controllers/plant.controller";

export const plantRouter = express.Router();

plantRouter.route("/").get(getPlantsByUid).post(addPlant);

plantRouter.route("/:id").get(getPlant).patch(updatePlant).delete(deletePlant);
