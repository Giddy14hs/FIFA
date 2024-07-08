import mongoose from "mongoose"
import Form from "../models/formModel.js"
import nodemailer from "nodemailer"

const getForms = async(req, res)=>{
  
  try{
    const newSubmit = await Form.find();
    res.status(200).json(newSubmit);
  }catch(error){
    res.status(404).json({message: error.message})
  }
}
const createForms = async(req, res)=> {
  const {name, radioInput, userEmail, phoneNumber, loanCategory} = req.body;

  try {
    //Check if a form with the same userEmail already exists
    //const existingForm = await Form.findOne({ userEmail });
    //if (existingForm) {
     //return res.status(409).json({ message: 'Form with this email already exists.' });
    //}

    // If no duplicate, create and save the new form
    const newForm = new Form({
      name,
      radioInput,
      userEmail,
      phoneNumber,
      loanCategory
    }); 

    await newForm.save();

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
      to: 'admin-email@example.com', // Admin email
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phoneNumber}\nLoan Category: ${loanCategory}\nRadio Input: ${radioInput}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      res.status(201).json(newForm);
    });
    
    res.status(201).json(newForm);
  } catch (error) {
    //if (error.code === 11000) {
      //res.status(409).json({ message: "Duplicate email entry" });
    //} else{
    res.status(409).json({message: error.message})}
  //}
}
export{getForms, createForms};