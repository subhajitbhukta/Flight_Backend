const express = require('express');
const { signup, login, logout, forgotPassword, verifyOtpAndResetPassword } = require('../controllers/authController');
const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route for general users
router.post('/login', login);

// Logout route
router.get('/logout', logout);

// Admin login route (reusing the same login function as it checks for admin internally)
router.post('/admin-login', login);

// Forgot password route
router.post('/forgot-password', forgotPassword);

// OTP verification and password reset route
router.post('/verify-otp', verifyOtpAndResetPassword);

module.exports = router;
