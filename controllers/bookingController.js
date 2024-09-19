const Booking = require('../models/BookingModel');
const User = require('../models/UserModel'); // Assuming you have a User model

// Create a new booking
exports.createBooking = async (req, res) => {
  const { flightId, username, tickets, totalPrice, from, to } = req.body;

  try {
    // Ensure the user is authenticated
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create the new booking
    const newBooking = await Booking.create({
      user: user._id,
      username,
      flightId,
      tickets,
      totalPrice,
      from,
      to,
    });

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error.message);
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
};

// Get all bookings (admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error.message);
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
};

// Get bookings by user ID
exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await Booking.find({ user: userId }).populate('user', 'name email');
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user' });
    }
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error.message);
    res.status(500).json({ message: 'Error fetching user bookings', error: error.message });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
  } catch (error) {
    console.error('Error updating booking:', error.message);
    res.status(500).json({ message: 'Error updating booking', error: error.message });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error.message);
    res.status(500).json({ message: 'Error deleting booking', error: error.message });
  }
};
