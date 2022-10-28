import { plantModel } from "../models/plant.model";
import { Filter } from "../types/filter.types";
import { Plant } from "../types/plant.types";

async function getPlants() {
  const plants = await plantModel.find();
  return plants;
}

async function getPlantsByCriteria({
  shade,
  sun_full,
  sun_part,
  moisture_wet,
}: Filter) {
  console.log("plant service log", shade);
  const plants = await plantModel
    .find({
      $or: [
        { "sun.shade": shade },
        { "sun.part": sun_part },
        { "sun.full": sun_full },
      ],
    })
    .lean();
  return plants;
}

async function getPlant(id: string) {
  const plant = await plantModel.findById(id);
  return plant;
}

async function getPlantsByUid(uid: string) {
  const plant = await plantModel.find({ uid }).lean();
  return plant;
}

async function addPlant(data: Partial<Plant>) {
  const newPlant = await plantModel.create(data);
  return newPlant;
}

async function updatePlant(id: string, data: Partial<Plant>) {
  const updatedPlant = await plantModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}

async function deletPlant(id: string) {
  return await plantModel.findByIdAndDelete(id);
}

export const plantService = {
  getPlant,
  getPlants,
  getPlantsByCriteria,
  getPlantsByUid,
  addPlant,
  updatePlant,
  deletPlant,
};
