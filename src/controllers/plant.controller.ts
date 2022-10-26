import { Request, Response } from "express";
import { plantService } from "../services/plant.service";

export async function getPlants(req: Request, res: Response) {
  try {
    const plants = await plantService.getPlants();
    return res.status(200).json(plants);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getPlantsByCriteria(req: Request, res: Response) {
  try {
    const plants = plantService.getPlantsByCriteria(
      Boolean(req.params.sunInput)
    );
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
