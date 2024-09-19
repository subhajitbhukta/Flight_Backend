const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  username: {
    type: String, // Store the username as a string
    required: true,
  },
  flightId: {
    type: String, // Store flight ID as a string
    required: true,
  },
  tickets: {
    type: Number,
    required: true,
    min: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  from: {
    type: String, // Store the departure location
    required: true,
  },
  to: {
    type: String, // Store the destination location
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
