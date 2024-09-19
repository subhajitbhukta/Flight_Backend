const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Signup
exports.signup = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    if (isAdmin) {
      const existingAdmin = await User.findOne({ isAdmin: true });
      if (existingAdmin) {
        return res.status(400).json({ message: 'An admin already exists. Only one admin is allowed.' });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hash,
      isAdmin: isAdmin || false,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { email: user.email, userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie("token", token, { httpOnly: true, secure: false });

    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Logout
exports.logout = (req, res) => {
  res.cookie("token", "", { httpOnly: true, secure: false, expires: new Date(0) });
  res.status(200).json({ message: 'Logout successful' });
};

// Forgot Password
// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    console.log(`Received forgot password request for email: ${email}`);
    
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User found:', user);

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Generated OTP:', otp);

    user.resetPasswordToken = otp;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    console.log('OTP and expiry saved to user record');

    // Send the OTP email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'subhajitbhukta973@gmail.com',
        pass: process.env.Password_Gmail
      }
    });

    const mailOptions = {
      to: user.email,
      from: process.env.Gmail,
      subject: 'Your OTP for Password Reset',
      text: `Your OTP for resetting the password is ${otp}.`
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Error processing forgot password request:', error);
    res.status(500).json({ message: 'Error processing forgot password request', error });
  }
};


// Verify OTP and Reset Password
// Verify OTP and Reset Password
exports.verifyOtpAndResetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    console.log(`Verifying OTP for email: ${email}, OTP: ${otp}`);

    const user = await User.findOne({
      email,
      resetPasswordToken: otp,
      resetPasswordExpires: { $gt: Date.now() } // Ensure the OTP hasn't expired
    });

    if (!user) {
      console.log('Invalid or expired OTP');
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    console.log('OTP verified, resetting password');

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    // Clear the OTP and expiry time from the user's record
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    console.log('Password reset successfully');

    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Error resetting password', error });
  }
};

