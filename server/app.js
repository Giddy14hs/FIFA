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
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// CORS configuration
const corsOptions = {
  origin: [process.env.FRONTEND_URL, 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: "32mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}));

// Routes
app.use("/contact", reviewRoutes);
app.use("/users", userRoutes);
app.use("/forms", formRoutes);
app.use("/auth", authRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT;

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