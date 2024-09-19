const express = require('express');
const {
  createBooking,
  getAllBookings,
  updateBooking,
  deleteBooking,
  getUserBookings
} = require('../controllers/bookingController');
const { isLoggedIn, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// Create a new booking
router.post('/', isLoggedIn, createBooking);

// Get all bookings (admin only)
router.get('/', isLoggedIn, isAdmin, getAllBookings);

// Get bookings by user ID
router.get('/user/:userId/bookings', isLoggedIn, getUserBookings);

// Update a booking (admin only)
router.put('/:id', isLoggedIn, isAdmin, updateBooking);

// Delete a booking (admin only)
router.delete('/:id', isLoggedIn, isAdmin, deleteBooking);

module.exports = router;
