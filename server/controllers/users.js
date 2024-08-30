import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import User from "../models/user.js"
import nodemailer from "nodemailer"

const login = async(req, res) => {
  const {email, password} = req.body
   
  try{
    const oldUser = await User.findOne({email});

    if(!oldUser){
      return res.status(400).json({message: "User does not exist"})
    }
    const isPasswordValid = await bcrypt.compare(password, oldUser.password)

    if(!isPasswordValid){
      return res.status(400).json({message: "Invalid password"})
    }
    //information we want to store in token
    const token = jwt.sign({email: oldUser.email, id: oldUser._id}, process.env.JWT_SECRET, {expiresIn: "1h"});

    res.status(200).json({result: oldUser, token})
  }catch(error){
    res.status(500).json({message: "Something went wrong"})
  }
};

const signup = async(req, res) => {
  const {username, email, password, confirmPassword} = req.body

  try {
    const oldUser = await User.findOne({email});

    if(oldUser){
      return res.status(400).json({message: "Email already exists"})
    }
    if(password !== confirmPassword){
      return res.status(400).json({message: "Passwords do not match"});
    }

    const encryptedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({username, email, password: encryptedPassword})

    const token = jwt.sign({email: result.email, id: result._id},process.env.JWT_SECRET, {expiresIn: "1h"});

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Brighter-World Programme',
      text: `Hi ${username},\n\nThank you for registering at Brighter-World Programme!\n\nBest regards,\nThe Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      }
    });

    res.status(201).json({result, token});

  } catch (error) {
    res.status(500).json({message: "Something went wrong"})
  }
};
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.js'; // Import your user model

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID, // Google Client ID from .env
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google Client Secret from .env
  callbackURL: '/auth/google/callback' // Callback URL that Google will redirect to
},
async (accessToken, refreshToken, profile, done) => {
  // Check if user already exists in your database
  const existingUser = await User.findOne({ googleId: profile.id });
  
  if (existingUser) {
    return done(null, existingUser);
  }
  
  // If user doesn't exist, create a new user in the database
  const newUser = new User({
    googleId: profile.id,
    email: profile.emails[0].value,
    name: profile.displayName,
  });

  await newUser.save();
  done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user by ID
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user); // Deserialize user by finding user ID
  });
});


export {login, signup};
