import express from "express";
import mainRouter from "./routes/index.js";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

app.listen(PORT, (err) => {
  if (err) console.log("!Error in server setup!");
  console.log(`Visit http://localhost:${PORT}/`);
});
