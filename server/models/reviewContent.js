import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  username: {type: String, required: true},
  userId: {type: String, required: true},
  rating: {type: Number, required: true, min: 1, max: 5},
  likes: {type: Number, default: 0},
  postDate: {type: Number, default: new Date()}
});

export default mongoose.model("Review", reviewSchema);