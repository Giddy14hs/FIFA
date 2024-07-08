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
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  phoneNumber: {
    type: String,
    required: true
  },
  loanCategory: { 
    type: String, 
    required: true 
  },
});

export default mongoose.model("Products", formSchema);