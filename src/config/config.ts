import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  mongoURI: process.env.MONGO_URI as string,
  port: process.env.PORT || 5000,
};
