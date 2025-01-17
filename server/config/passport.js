import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from "dotenv"
import { OAuth2Client } from 'google-auth-library';
import express from "express";
import User from '../models/user.js';

const app = express()
dotenv.config()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// app.post('/auth/google/callback', async (req, res) => {
//   const token = req.body.token;
  
//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     // You can now access user info from payload and create a new user or log them in.
//     res.status(200).json({ user: payload }); // Example response with user info
//   } catch (error) {
//     res.status(400).json({ error: 'Invalid token' });
//   }
// });



// passport.use(new GoogleStrategy({
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   // Handle the user profile
//   return done(null, profile);
// }));




// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5001/auth/google/callback",
//       scope: ["profile", "email"]
//     },
//      function (accessToken, refreshToken, profile, callback) {
// 			callback(null, profile);
// 		}
//   )
// );




// passport.serializeUser((user, done) => {
//   done(null, user.googleId); // Serialize user by ID
// });

// passport.deserializeUser(async (googleId, done) => {
//   try {
//     const user = await User.findOne({googleId}); // Replace with your method to fetch the user
//     done(null, user);
//   } catch (err) {
//     done(err, null);
//   }
// });



// Google OAuth Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5001/auth/google/callback",
//       scope: ["profile", "email"]
//     },
//     async function (accessToken, refreshToken, profile, done) {
//       try {
//         console.log("Google Profile:", profile); // Debug the profile object

//         // Check if the user already exists
//         let user = await User.findOne({ googleId: profile.id });

//         if (!user) {
//           // If user doesn't exist, create a new one
//           user = new User({
//             googleId: profile.id,
//             email: profile.emails[0].value, // Ensure emails are enabled in Google OAuth scope
//             name: profile.displayName,
//           });
//           await user.save();
//         }

//         done(null, user); // Pass the user to be serialized
//       } catch (error) {
//         console.error("Error in Google Strategy:", error);
//         done(error, null); // If there's an error, pass it to the done callback
//       }
//     }
//   )
// );


// // Serialize User
// passport.serializeUser((user, done) => {
//   console.log("Serializing User:", user); // Debug the user object
//   done(null, user.googleId); // Store googleId in the session
// });

// // Deserialize User
// passport.deserializeUser(async (googleId, done) => {
//   try {
//     console.log("Deserializing User with GoogleID:", googleId); // Debug the ID
//     const user = await User.findOne({ googleId });
//     if (!user) {
//       console.error("User not found during deserialization");
//       return done(null, false);
//     }
//     done(null, user);
//   } catch (error) {
//     console.error("Error in deserialization:", error);
//     done(error, null);
//   }
// });




// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			callbackURL: "http://localhost:5001/auth/google/callback",
// 			scope: ["profile", "email"],
// 		},
// 		function (accessToken, refreshToken, profile, callback) {
// 			callback(null, profile);
// 		}
// 	)
// );



passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5001/auth/google/callback',
  scope: ['profile', 'email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Find or create user logic based on the Google profile info
    let user = await User.findOne({ email: profile.emails[0].value });

    if (!user) {
      // If user does not exist, create a new one
      user = await User.create({
				googleId: profile.id,
        username: profile.displayName,
        email: profile.emails[0].value,
      });
    }

    // Return the user information to the next function
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

passport.serializeUser((user, done) => {
	done(null, user.googleId);
});

passport.deserializeUser(async(googleId, done) => {
  try {
    const user = await User.findOne({ googleId });
    if (!user) {
      return done(new Error('User not found'), null);
    }
    done(null, user); // Return the full user object
  } catch (error) {
    done(error, null);
  }
});