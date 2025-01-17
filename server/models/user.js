import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true }, // Google ID for the user
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String }, // Keep this optional for users who sign up via Google
});

const User = mongoose.model('User', userSchema);
export default User;
