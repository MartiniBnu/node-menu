import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import menuRoutes from "./routes";


const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(menuRoutes);

const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?retryWrites=true&w=majority`

console.log(uri);

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on http://locahost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });