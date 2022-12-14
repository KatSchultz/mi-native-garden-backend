import { Request, Response } from "express";
import { plantService } from "../services/plant.service";

export async function getPlants(req: Request, res: Response) {
  try {
    console.log("running get plants");
    const plants = await plantService.getPlants();
    return res.status(200).json(plants);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getPlantsByCriteria(req: Request, res: Response) {
  try {
    console.log("req.query: ", req.query);
    let sun_shade = req.query.sun_shade !== "" ? true : undefined;
    let sun_full = req.query.sun_full !== "" ? true : undefined;
    let sun_part = req.query.sun_part !== "" ? true : undefined;
    let moisture_wet = req.query.moisture_wet !== "" ? true : undefined;
    let moisture_ave = req.query.moisture_ave !== "" ? true : undefined;
    let moisture_dry = req.query.moisture_dry !== "" ? true : undefined;

    const plants = await plantService.getPlantsByCriteria({
      sun_shade,
      sun_full,
      sun_part,
      moisture_wet,
      moisture_ave,
      moisture_dry,
    });
    // console.log("shade: ", shade);
    return res.status(200).json(plants);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getPlantsByUid(req: Request, res: Response) {
  try {
    const plants = await plantService.getPlantsByUid(req.query.uid as string);
    return res.status(200).json(plants);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getPlant(req: Request, res: Response) {
  try {
    const plant = await plantService.getPlant(req.params.id);
    if (!plant) return res.status(404).json("Plant not found");
    return res.status(200).json(plant);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addPlant(req: Request, res: Response) {
  try {
    const newPlant = plantService.addPlant(req.body);
    return res.status(201).json(newPlant);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updatePlant(req: Request, res: Response) {
  try {
    const updatedPlant = await plantService.updatePlant(
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedPlant);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deletePlant(req: Request, res: Response) {
  try {
    await plantService.deletPlant(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
