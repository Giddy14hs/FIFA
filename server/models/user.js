import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true }, // Google ID for the user
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String }, // Keep this optional for users who sign up via Google
});

export default mongoose.model('User', userSchema);
