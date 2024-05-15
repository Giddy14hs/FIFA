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
const updateReview = async (req, res) => {
  const { id: _id } = req.params;

  const review = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("This id doesnt belong to any review");
  }

  const updatedReview = await Review.findByIdAndUpdate(_id, story, { new: true });

  res.json(updatedReview);
}

const deleteReview= async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("This id doesnt belong to any review");
  }

  await Review.findByIdAndRemove(id);

  res.json({ message: "Review deleted successfully" });
}


export{getReviews, createReview, deleteReview, updateReview};