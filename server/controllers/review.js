import mongoose from "mongoose"
import Review from "../models/reviewContent.js"

const getReviews = async(req, res) => {
  
  try {
    const review = await Review.find();
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

const createReview = async(req, res)=> {
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

export{getReviews, createReview};