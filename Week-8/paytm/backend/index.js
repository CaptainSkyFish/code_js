import express from "express";
import mainRouter from "./routes/index.js";
import cors from "cors";
const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api/v1", mainRouter);

app.use(cors());

app.listen(PORT, (err) => {
  if (err) console.log("!Error in server setup!");
  console.log(`Server listening on PORT: ${PORT}`);
});
