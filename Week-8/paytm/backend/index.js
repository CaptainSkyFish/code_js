import express from "express";
import mainRouter from "./routes/index";
import cors from "cors";
import { JWT_SECRET } from "./config";
const app = express;
const PORT = 4000;

app.use("api/v1", mainRouter);

app.use(cors());
app.use(express.json());

app.listen(PORT, (err) => {
  if (err) console.log("!Error in server setup!");
  console.log(`Server listening on PORT: ${PORT}`);
  console.log(JWT_SECRET);
});
