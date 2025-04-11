import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from "dotenv"
import { OAuth2Client } from 'google-auth-library';
import express from "express";
import User from '../models/user.js';
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
const app = express()
dotenv.config()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  scope: ['profile', 'email'],
  passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
  try {
    // Find or create user logic based on the Google profile info
    let user = await User.findOne({ where: { email: profile.emails[0].value } });

    if (!user) {
      // If user does not exist, create a new one
      user = await User.create({
        googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value,
      });
    }

    // Generate a token for the user
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Add the token to the user object
    user.token = token;

    // Send the welcome email to the newly created user
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Welcome to Brighter-World   – Your Growth Our Strength!',
      html: `
    <div>
      <h2>Hi ${user.username}, Welcome!</h2>
      <img src="cid:welcomeImage" alt="Welcome" style="width:100%; max-width:600px;" />
      <p>Explore our services now!</p>
    </div>
    <div>
      <!-- Main Content -->
      <p>We're thrilled to have you join us as part of a community dedicated to empowering financial growth. Here's how we can help:</p>
      <ul style="padding-left: 20px;">
        <li>Flexible savings plans to grow your wealth.</li>
        <li>Benevolent fund options for life's unexpected moments.</li>
        <li>Special loan solutions to bring your dreams to life.</li>
      </ul>
      <p>Your journey toward financial success starts here. <a href="brighterworld.com" style="color: #28a745; font-weight: bold;">Explore our services now</a> and see how we can help you achieve your goals today.</p>
      
      <!-- Call to Action -->
      <div style="text-align: center; margin: 20px;">
        <a href="brighterworld.com/products" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Explore Our Products Now</a>
      </div>

      <!-- Footer -->
      <p style="font-size: 14px; color: #555;">Best regards, <br><strong>The Brighter-World Programme Team</strong></p>
      <p style="font-size: 12px; color: #888;">Contact us: info@brighterworldltd.com | Visit us: <a href="brighterworldltd.com" style="color: #0056b3;">Brighter-World Programme</a></p>
    </div>
  `, 
  attachments: [
    {
      filename: 'image23.jpg',
      path: 'https://i.imgur.com/DFh5odQ.jpeg', 
      cid: 'welcomeImage' 
    }
  ] 
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to', user.email);

    return done(null, user);
  } catch (error) {
    console.error('Error in Google strategy:', error);
    return done(error, null);
  }
}));