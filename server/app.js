import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import reviewRoutes from "./routes/contact.js"
import userRoutes from "./routes/users.js";
import formRoutes from "./routes/forms.js"
import dotenv from "dotenv"

dotenv.config();  // This loads variables from .env file into process.env

console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

const app = express();

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());
app.use("/Contact", reviewRoutes)
app.use("/user", userRoutes)
app.use("/Products", formRoutes)

const MONGO_URI = process.env.MONGO_URI

const PORT = process.env.PORT

const connectDB = async() => {
  try {
    await mongoose.connect(MONGO_URI)
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("Connection to MongoDB failed", error.message)
  }
}
connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established successfully"))
mongoose.connection.on("error", (error) => console.log(error));