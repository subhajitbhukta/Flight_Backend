require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Import routes
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');
const flightRoutes = require('./routes/flightRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(cors({
  origin: ['http://localhost:3001', 'https://jetquest.netlify.app'], // Adjust this according to your frontend's domain
  credentials: true // Allow cookies to be sent across origins
}));
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(cookieParser()); // Parse cookies in requests

// API Routes
app.use('/api/users', userRoutes);        // User-related routes
app.use('/api/bookings', bookingRoutes);  // Booking-related routes
app.use('/api/auth', authRoutes);         // Authentication routes
app.use('/api/flights', flightRoutes);    // Flight-related routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
