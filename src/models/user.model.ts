import { model, Schema } from "mongoose";
import { User } from "../types/user.types";

const userSchema = new Schema<User>(
  {
    uid: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    photoURL: { type: String },
    profileDescription: { type: String },
    profilePhotoUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export const userModel = model<User>("User", userSchema);
