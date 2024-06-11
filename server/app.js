import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import reviewRoutes from "./routes/contact.js"
import userRoutes from "./routes/users.js";
import formRoutes from "./routes/forms.js"

const app = express();

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());
app.use("/Contact", reviewRoutes)
app.use("/user", userRoutes)
app.use("/Products", formRoutes)

const MONGO_URI = "mongodb+srv://Lemiso123:KGM3mF8eV59.k_H@cluster3.7trciu3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3"

const PORT = process.env.PORT || 5001;

const connectDB = async ()=> {
  try {
    await mongoose.connect(MONGO_URI)
    app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))
  } catch (err) {
    console.log("Connection to MongoDB failed", err.message);
  }
}

connectDB();

mongoose.connection.on("open", ()=> console.log("Connection to database has been established successfully"));
mongoose.connection.on("error", (err)=> console.log(err));