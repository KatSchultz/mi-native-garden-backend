import { model, Schema } from "mongoose";
import { Plant } from "../types/plant.types";

const plantSchema = new Schema<Plant>({
  name_common: {
    type: String,
    required: true,
    unique: true,
  },
  name_scientific: String,
  region: String,
  flower_color: String,
  moisture: String,
  sun: String,
  height: Number,
});

export const plantModel = model<Plant>("Plant", plantSchema);
