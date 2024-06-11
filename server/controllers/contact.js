import mongoose from "mongoose"
import Contact from "../models/contactModel.js"

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
    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}
export{getContacts, createContact};