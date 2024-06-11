import mongoose from "mongoose"
import Form from "../models/formModel.js"

const createForms = async(req, res)=> {
  const {name, radioInput, userEmail, phoneNumber} = req.body;

  const newForm = new Form({
    name,
    radioInput,
    userEmail,
    phoneNumber
  });
  try {
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ message: "Duplicate email entry" });
    } else{
    res.status(409).json({message: error.message})}
  }
}
export{createForms};