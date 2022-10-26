import { model, Schema } from "mongoose";
import { UserPlant } from "../types/userPlant.type";

const userPlantSchema = new Schema<UserPlant>({
  plant_id: { type: String },
  uid: { type: String, required: true },
  have: { type: Boolean },
  want: { type: Boolean },
  location: { type: String },
  comment: { type: String },
});

export const userPlantModel = model<UserPlant>("UserPlant", userPlantSchema);
