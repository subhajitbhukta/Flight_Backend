const User = require('../models/UserModel');

exports.getUserBookings = async (req, res) => {
  const userId = req.params.id;
  try {
    const bookings = await Booking.find({ user: userId }).populate('user', 'username');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).send(err);
  }
};
