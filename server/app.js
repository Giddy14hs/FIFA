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
import "./config/passport.js"
import authRoutes from "./routes/auth.js"
import MongoStore from 'connect-mongo';


dotenv.config();  // This loads variables from .env file into process.env

console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

const app = express();
// Middleware for handling sessions
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false, // Don't save empty sessions
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI, // Ensure this is your MongoDB URI
  }),
  cookie: {
    secure: false, // Use secure cookies in production
    httpOnly: true, // Prevent client-side JavaScript from accessing cookies
  },
}));

app.use(passport.initialize());
app.use(passport.session());


const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from React frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Allow cookies to be sent with requests
};

app.use(cors(corsOptions)); // Use CORS middleware


app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));
app.use(cors());
app.use("/contact", reviewRoutes)
app.use("/user", userRoutes)
app.use("/products", formRoutes)
app.use('/auth', authRoutes)


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