import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import reviewRoutes from "./routes/contact.js"
import userRoutes from "./routes/users.js";
import formRoutes from "./routes/forms.js"
import session from 'express-session';
import passport from 'passport';
import dotenv from "dotenv"
import "./controllers/users.js"

dotenv.config();  // This loads variables from .env file into process.env

console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

const app = express();
// Middleware for handling sessions
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());
app.use("/contact", reviewRoutes)
app.use("/user", userRoutes)
app.use("/products", formRoutes)

// Routes for Google authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to the home page or dashboard
    res.redirect('/'); 
  }
);

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