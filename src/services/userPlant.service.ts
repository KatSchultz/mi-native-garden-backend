import { plantModel } from "../models/plant.model";
import { userPlantModel } from "../models/userPlant.model";
import { UserPlant } from "../types/userPlant.type";

async function getUserPlants(uid: string) {
  const userPlants = await userPlantModel.find({ uid }).lean();
  return userPlants;
}

async function addUserPlant(data: Partial<UserPlant>) {
  const newUserPlant = userPlantModel.create(data);
  return newUserPlant;
}

async function updateUserPlant(id: string, data: Partial<UserPlant>) {
  const updatedUserPlant = await userPlantModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedUserPlant;
}

async function deleteUserPlant(id: string) {
  return await userPlantModel.findByIdAndDelete(id);
}

export const userPlantService = {
  getUserPlants,
  addUserPlant,
  updateUserPlant,
  deleteUserPlant,
};
