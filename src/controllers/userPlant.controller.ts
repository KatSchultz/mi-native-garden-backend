import { Request, Response } from "express";
import { userPlantService } from "../services/userPlant.service";

export async function getUserPlants(req: Request, res: Response) {
  try {
    const userPlants = await userPlantService.getUserPlants(
      req.query.uid as string
    );
    return res.status(200).json(userPlants);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function addUserPlant(req: Request, res: Response) {
  try {
    const newUserPlant = await userPlantService.addUserPlant(req.body);
    return res.status(201).json(newUserPlant);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function updateUserPlant(req: Request, res: Response) {
  try {
    const updatedUserPlant = await userPlantService.updateUserPlant(
      req.params.id,
      req.body
    );
    return res.status(200).json(updateUserPlant);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function deleteUserPlant(req: Request, res: Response) {
  try {
    await userPlantService.deleteUserPlant(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
