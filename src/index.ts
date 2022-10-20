import express from "express";
import cors from "cors";
import { plantRouter } from "./routes/plant.routes";
import { userRouter } from "./routes/user.routes";
import { authRouter } from "./routes/auth.routes";
import mongoose from "mongoose";
import { config } from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plants", plantRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Connected to MongoDB"));

const port = config.port;

app.listen(port, () => console.log(`Listening on port: ${port}`));
