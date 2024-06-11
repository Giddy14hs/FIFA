import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  radioInput: {
    type: String,
    enum: ['yes', 'no'], 
    required: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^\d{10}$/ // Assuming a 10-digit phone number
  }
});

export default mongoose.model("Products", formSchema);