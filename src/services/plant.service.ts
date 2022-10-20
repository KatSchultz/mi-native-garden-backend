import { plantModel } from "../models/plant.model";
import { Plant } from "../types/plant.types";

async function getPlants(){
    const plants = await plantModel.find();
    return plants
}

async function getPlant(){
    const plant = await plantModel.findById(id);
    return plant;
}

async function getPlantByUid(uid: string){
    const plant = await plantModel.findOne({uid}).lean();
    return plant;
}

async function addPlant(data: Partial<Plant>){
    const newPlant 
}