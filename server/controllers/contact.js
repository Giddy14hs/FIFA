import mongoose from "mongoose"
import Review from "../models/contactModel.js"

const createContact = async(req, res)=> {
  const body = req.body;

  const newReview = new Review({
    ...body
  });
  try {
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}
export{createContact};