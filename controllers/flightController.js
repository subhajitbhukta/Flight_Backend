// Assuming you're using a database, but for now, let's use some static data
const flights = [
        { id: 1, from: 'New York', to: 'London', date: '2023-08-01', price: 500, time: '08:00 AM' },
        { id: 2, from: 'New York', to: 'London', date: '2023-08-01', price: 200, time: '10:00 AM' },
        { id: 3, from: 'New York', to: 'London', date: '2023-08-01', price: 300, time: '12:00 PM' },
        { id: 4, from: 'New York', to: 'London', date: '2023-08-01', price: 400, time: '02:00 PM' },
        { id: 5, from: 'New York', to: 'London', date: '2023-08-01', price: 450, time: '04:00 PM' },
        { id: 6, from: 'New York', to: 'London', date: '2023-08-01', price: 350, time: '06:00 PM' },
        { id: 7, from: 'New York', to: 'London', date: '2023-08-01', price: 250, time: '08:00 PM' },
        { id: 8, from: 'New York', to: 'London', date: '2023-08-01', price: 150, time: '10:00 PM' },
        { id: 9, from: 'New York', to: 'London', date: '2023-08-01', price: 550, time: '11:59 PM' },
        { id: 10, from: 'New York', to: 'London', date: '2023-08-02', price: 500, time: '08:00 AM' },
        { id: 11, from: 'Paris', to: 'Tokyo', date: '2023-08-05', price: 700, time: '02:00 PM' },
        { id: 12, from: 'Paris', to: 'Tokyo', date: '2023-08-05', price: 800, time: '04:00 PM' },
        { id: 13, from: 'Paris', to: 'Tokyo', date: '2023-08-05', price: 750, time: '06:00 PM' },
        { id: 14, from: 'Paris', to: 'Tokyo', date: '2023-08-05', price: 850, time: '08:00 PM' },
        { id: 15, from: 'Paris', to: 'Tokyo', date: '2023-08-05', price: 650, time: '10:00 PM' },
        { id: 16, from: 'Paris', to: 'Tokyo', date: '2023-08-05', price: 950, time: '11:59 PM' },
        { id: 17, from: 'Los Angeles', to: 'Sydney', date: '2023-08-10', price: 600, time: '04:00 PM' },
        { id: 18, from: 'Los Angeles', to: 'Sydney', date: '2023-08-10', price: 650, time: '06:00 PM' },
        { id: 19, from: 'Los Angeles', to: 'Sydney', date: '2023-08-10', price: 700, time: '08:00 PM' },
        { id: 20, from: 'Los Angeles', to: 'Sydney', date: '2023-08-10', price: 550, time: '10:00 PM' },
        { id: 21, from: 'Los Angeles', to: 'Sydney', date: '2023-08-10', price: 500, time: '11:59 PM' },
        { id: 22, from: 'Los Angeles', to: 'Sydney', date: '2023-08-11', price: 600, time: '04:00 PM' },
        { id: 23, from: 'Los Angeles', to: 'Sydney', date: '2023-08-11', price: 650, time: '06:00 PM' },
        { id: 24, from: 'Los Angeles', to: 'Sydney', date: '2023-08-11', price: 700, time: '08:00 PM' },
        { id: 25, from: 'Los Angeles', to: 'Sydney', date: '2023-08-11', price: 750, time: '10:00 PM' },
        { id: 26, from: 'Los Angeles', to: 'Sydney', date: '2023-08-11', price: 800, time: '11:59 PM' },
        { id: 27, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 300, time: '07:00 AM' },
        { id: 28, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 350, time: '09:00 AM' },
        { id: 29, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 400, time: '11:00 AM' },
        { id: 30, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 450, time: '01:00 PM' },
        { id: 31, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 500, time: '03:00 PM' },
        { id: 32, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 550, time: '05:00 PM' },
        { id: 33, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 600, time: '07:00 PM' },
        { id: 34, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 650, time: '09:00 PM' },
        { id: 35, from: 'San Francisco', to: 'Chicago', date: '2023-08-15', price: 700, time: '11:00 PM' },
        { id: 36, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 300, time: '07:00 AM' },
        { id: 37, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 350, time: '09:00 AM' },
        { id: 38, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 400, time: '11:00 AM' },
        { id: 39, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 450, time: '01:00 PM' },
        { id: 40, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 500, time: '03:00 PM' },
        { id: 41, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 550, time: '05:00 PM' },
        { id: 42, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 600, time: '07:00 PM' },
        { id: 43, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 650, time: '09:00 PM' },
        { id: 44, from: 'San Francisco', to: 'Chicago', date: '2023-08-16', price: 700, time: '11:00 PM' },
        { id: 45, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 500, time: '06:00 AM' },
        { id: 46, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 550, time: '08:00 AM' },
        { id: 47, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 600, time: '10:00 AM' },
        { id: 48, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 650, time: '12:00 PM' },
        { id: 49, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 700, time: '02:00 PM' },
        { id: 50, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 750, time: '04:00 PM' },
        { id: 51, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 800, time: '06:00 PM' },
        { id: 52, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 850, time: '08:00 PM' },
        { id: 53, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 900, time: '10:00 PM' },
        { id: 54, from: 'New York', to: 'Los Angeles', date: '2023-08-20', price: 950, time: '11:59 PM' },
        { id: 55, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 300, time: '06:00 AM' },
        { id: 56, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 350, time: '08:00 AM' },
        { id: 57, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 400, time: '10:00 AM' },
        { id: 58, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 450, time: '12:00 PM' },
        { id: 59, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 500, time: '02:00 PM' },
        { id: 60, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 550, time: '04:00 PM' },
        { id: 61, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 600, time: '06:00 PM' },
        { id: 62, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 650, time: '08:00 PM' },
        { id: 63, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 700, time: '10:00 PM' },
        { id: 64, from: 'Chicago', to: 'Miami', date: '2023-08-25', price: 750, time: '11:59 PM' },
        { id: 65, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 300, time: '06:00 AM' },
        { id: 66, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 350, time: '08:00 AM' },
        { id: 67, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 400, time: '10:00 AM' },
        { id: 68, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 450, time: '12:00 PM' },
        { id: 69, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 500, time: '02:00 PM' },
        { id: 70, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 550, time: '04:00 PM' },
        { id: 71, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 600, time: '06:00 PM' },
        { id: 72, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 650, time: '08:00 PM' },
        { id: 73, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 700, time: '10:00 PM' },
        { id: 74, from: 'Miami', to: 'Chicago', date: '2023-08-26', price: 750, time: '11:59 PM' },
        { id: 75, from: 'London', to: 'New York', date: '2023-08-30', price: 500, time: '06:00 AM' },
        { id: 76, from: 'London', to: 'New York', date: '2023-08-30', price: 550, time: '08:00 AM' },
        { id: 77, from: 'London', to: 'New York', date: '2023-08-30', price: 600, time: '10:00 AM' },
        { id: 78, from: 'London', to: 'New York', date: '2023-08-30', price: 650, time: '12:00 PM' },
        { id: 79, from: 'London', to: 'New York', date: '2023-08-30', price: 700, time: '02:00 PM' },
        { id: 80, from: 'London', to: 'New York', date: '2023-08-30', price: 750, time: '04:00 PM' },
        { id: 81, from: 'London', to: 'New York', date: '2023-08-30', price: 800, time: '06:00 PM' },
        { id: 82, from: 'London', to: 'New York', date: '2023-08-30', price: 850, time: '08:00 PM' },
        { id: 83, from: 'London', to: 'New York', date: '2023-08-30', price: 900, time: '10:00 PM' },
        { id: 84, from: 'London', to: 'New York', date: '2023-08-30', price: 950, time: '11:59 PM' },
        { id: 85, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 700, time: '06:00 AM' },
        { id: 86, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 750, time: '08:00 AM' },
        { id: 87, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 800, time: '10:00 AM' },
        { id: 88, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 850, time: '12:00 PM' },
        { id: 89, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 900, time: '02:00 PM' },
        { id: 90, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 950, time: '04:00 PM' },
        { id: 91, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 1000, time: '06:00 PM' },
        { id: 92, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 1050, time: '08:00 PM' },
        { id: 93, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 1100, time: '10:00 PM' },
        { id: 94, from: 'Tokyo', to: 'Paris', date: '2023-09-05', price: 1150, time: '11:59 PM' },
        { id: 95, from: 'Sydney', to: 'Los Angeles', date: '2023-09-10', price: 800, time: '06:00 AM' },
        { id: 96, from: 'Sydney', to: 'Los Angeles', date: '2023-09-10', price: 850, time: '08:00 AM' },
        { id: 97, from: 'Sydney', to: 'Los Angeles', date: '2023-09-10', price: 900, time: '10:00 AM' },
        { id: 98, from: 'Sydney', to: 'Los Angeles', date: '2023-09-10', price: 950, time: '12:00 PM' },
        { id: 99, from: 'Sydney', to: 'Los Angeles', date: '2023-09-10', price: 1000, time: '02:00 PM' },
        { id: 100, from: 'Sydney', to: 'Los Angeles', date: '2023-09-10', price: 1050, time: '04:00 PM' },
  ];
  
  exports.getFlights = async (req, res) => {
    try {
      // Example of adding pagination (optional)
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || flights.length;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedFlights = flights.slice(startIndex, endIndex);
  
      res.status(200).json({
        status: 'success',
        results: paginatedFlights.length,
        data: {
          flights: paginatedFlights
        }
      });
    } catch (err) {
      console.error(err); // Log error for debugging
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong while fetching flights'
      });
    }
  };
  
  // Controller function to get a specific flight by ID
  exports.getFlightById = async (req, res) => {
    const id = parseInt(req.params.id);
    const flight = flights.find(flight => flight.id === id);
  
    if (!flight) {
      return res.status(404).json({
        status: 'fail',
        message: 'Flight not found'
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        flight
      }
    });
  };