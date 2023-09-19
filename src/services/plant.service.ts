import { plantModel } from "../models/plant.model";
import { Filter } from "../types/filter.types";
import { Plant } from "../types/plant.types";

async function getPlants() {
  const plants = await plantModel.find();
  return plants;
}

async function getPlantsByCriteria({
  sun_shade,
  sun_full,
  sun_part,
  moisture_wet,
  moisture_ave,
  moisture_dry,
}: Filter) {
  if (
    sun_full === undefined &&
    sun_part === undefined &&
    sun_shade === undefined &&
    moisture_ave === undefined &&
    moisture_dry === undefined &&
    moisture_wet === undefined
  ) {
    const plants = await plantModel.find();
    return plants;
  }

  // If only sun selected
  if (
    moisture_ave === undefined &&
    moisture_dry === undefined &&
    moisture_wet === undefined
  ) {
    const plants = await plantModel.aggregate([
      {
        $match: {
          $or: [
            {
              "sun.full": sun_full,
            },
            {
              "sun.shade": sun_shade,
            },
            {
              "sun.part": sun_part,
            },
          ],
        },
      },
    ]);
    return plants;
  }
  console.log("sun_Shade in service: ", sun_shade);

  // If only moisture selected
  if (
    sun_full === undefined &&
    sun_part === undefined &&
    sun_shade === undefined
  ) {
    const plants = plantModel.aggregate([
      {
        $match: {
          $or: [
            {
              "moisture.wet": moisture_wet,
            },
            {
              "moisture.dry": moisture_dry,
            },
            {
              "moisture.ave": moisture_ave,
            },
          ],
        },
      },
    ]);

    return plants;
  }

  // If both selected
  const plants = await plantModel.aggregate([
    {
      $match: {
        $or: [
          {
            "sun.full": sun_full,
          },
          {
            "sun.shade": sun_shade,
          },
          {
            "sun.part": sun_part,
          },
        ],
      },
    },
    {
      $match: {
        $or: [
          {
            "moisture.wet": moisture_wet,
          },
          {
            "moisture.dry": moisture_dry,
          },
          {
            "moisture.ave": moisture_ave,
          },
        ],
      },
    },
  ]);
  // const plants = await plantModel.find({
  //   $and: [
  //     {
  //       $or: [
  //         { "sun.shade": shade },
  //         { "sun.part": sun_part },
  //         { "sun.full": sun_full },
  //       ],
  //     },
  //     {
  //       $or: [
  //         { "moisture.ave": moisture_ave },
  //         { "moisture.dry": moisture_dry },
  //         { "moisture.wet": moisture_wet },
  //       ],
  //     },
  //   ],
  // });
  console.log("services plants: ", plants);
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
