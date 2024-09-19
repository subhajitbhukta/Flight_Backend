const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Route for getting all flights
router.get('/', flightController.getFlights); // Use '/' here

module.exports = router;
