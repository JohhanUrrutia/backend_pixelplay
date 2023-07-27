import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";
const PORT = process.env.PORT || 4000;
export const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
