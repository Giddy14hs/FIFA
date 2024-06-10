import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  userEmail: {type: String, required: true},
  userMessage: {type: String, required: true}
});

export default mongoose.model("Contact", contactSchema);