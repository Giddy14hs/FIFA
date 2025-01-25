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
      subject: 'Welcome to Brighter-World Programme  – Your Partner in Financial Growth!',
      html: `
    <div>
      <h2>Hi ${username}, Welcome!</h2>
      <img src="cid:welcomeImage" alt="Welcome" style="width:100%; max-width:600px;" />
      <p>Explore our services now!</p>
    </div>
    <div>
      <!-- Main Content -->
      <p>We’re thrilled to have you join us as part of a community dedicated to empowering financial growth. Here’s how we can help:</p>
      <ul style="padding-left: 20px;">
        <li>Flexible savings plans to grow your wealth.</li>
        <li>Benevolent fund options for life's unexpected moments.</li>
        <li>Special loan solutions to bring your dreams to life.</li>
      </ul>
      <p>Your journey toward financial success starts here. <a href="your-website-link" style="color: #28a745; font-weight: bold;">Explore our services now</a> and see how we can help you achieve your goals today.</p>
      
      <!-- Call to Action -->
      <div style="text-align: center; margin: 20px;">
        <a href="brighter-programme.vercel.app/products" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Explore Our Products Now</a>
      </div>

      <!-- Footer -->
      <p style="font-size: 14px; color: #555;">Best regards, <br><strong>The Brighter-World Programme Team</strong></p>
      <p style="font-size: 12px; color: #888;">Contact us: info@brighterworld.com | Visit us: <a href="brighter-programme.vercel.app" style="color: #0056b3;">Brighter-World Programme</a></p>
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

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: "Error sending welcome email" });
      }
      console.log('Email sent:', info.response);

      res.status(201).json({result, token});
    });
  } catch (error) {
    res.status(500).json({message: "Something went wrong"})
  }
};



export {login, signup};
