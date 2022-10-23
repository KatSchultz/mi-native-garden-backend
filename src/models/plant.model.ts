import { model, Schema } from "mongoose";
import { Plant } from "../types/plant.types";

const plantSchema = new Schema<Plant>({
  name_common: {
    type: String,
    required: true,
    unique: true,
  },
  name_scientific: String,
  region: [],
  flower_color: String,
  moisture_dry: Boolean,
  moisture_ave: Boolean,
  moisture_wet: Boolean,
  sun_full: Boolean,
  sun_part: Boolean,
  sun_shd: Boolean,
  height: String,
  img_url: String,
});

export const plantModel = model<Plant>("Plant", plantSchema);
