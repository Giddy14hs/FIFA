import express from 'express';
import bodyParser from "body-parser";
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
import sequelize from './config/database.js';

dotenv.config();

const app = express();

// Middleware for handling sessions
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
  },
  store: new session.MemoryStore() // Using memory store for now, you might want to use a different store in production
}));

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));

// Routes
app.use("/contact", reviewRoutes);
app.use("/users", userRoutes);
app.use("/forms", formRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3306;

// Sync database and start server
const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');
    
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

startServer();