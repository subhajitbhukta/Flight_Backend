const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Each user must have a unique email
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false, // Default to regular user unless explicitly set as admin
  },
  resetPasswordToken: {
    type: String,
    default: null, // Field to store OTP (One Time Password) or token
  },
  resetPasswordExpires: {
    type: Date,
    default: null, // Field to store the expiration time for OTP
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

module.exports = User;
