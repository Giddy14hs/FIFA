import mongoose from "mongoose"
import Contact from "../models/contactModel.js"
import nodemailer from "nodemailer"

const getContacts = async(req, res)=>{
  
  try{
    const contactSubmit = await Contact.find();
    res.status(200).json(contactSubmit);
  }catch(error){
    res.status(404).json({message: error.message})
  }
}
const createContact = async(req, res)=> {
  const {email, message} = req.body;

  const newContact = new Contact({
    email,
    message
  });
  try {
    await newContact.save();

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
      to: 'mpostymalon@gmail.com', // replace Admin email with the real
      subject: 'New Contact Submission',
      text: `Email: ${userEmail}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      console.log('Email sent:', info.response);
      res.status(201).json(newContact);
    });
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}
export{getContacts, createContact};