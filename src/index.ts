import express from "express";
import cors from "cors";
import { plantRouter } from "./routes/plant.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plants", plantRouter);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
