import mongoose from "mongoose"
import Form from "../models/formModel.js"

const getForms = async(req, res)=>{
  
  try{
    const newSubmit = await Form.find();
    res.status(200).json(newSubmit);
  }catch(error){
    res.status(404).json({message: error.message})
  }
}
const createForms = async(req, res)=> {
  const {name, radioInput, userEmail, phoneNumber} = req.body;

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
      phoneNumber
    });

    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    //if (error.code === 11000) {
      //res.status(409).json({ message: "Duplicate email entry" });
    //} else{
    res.status(409).json({message: error.message})}
  //}
}
export{getForms, createForms};