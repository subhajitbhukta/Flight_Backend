const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false, // Default to false, meaning regular user
  },
  resetPasswordToken: {
    type: String,
    default: null, // This will store the OTP
  },
  resetPasswordExpires: {
    type: Date,
    default: null, // This will store the expiration time for the OTP
  },
}, { timestamps: true }); // Optional: adds createdAt and updatedAt timestamps

const User = mongoose.model('User', userSchema);

module.exports = User;
