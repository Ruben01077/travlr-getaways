
const Trip = require('../models/trips');


const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error fetching trips (API):', err);
    res.status(500).json({ message: 'Error fetching trips', error: err });
  }
};


const tripsFindByCode = async (req, res) => {
  try {
    const tripCode = req.params.tripCode;
    const trip = await Trip.findOne({ code: tripCode }).exec(); 

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    console.error('Error fetching trip (API):', err);
    res.status(500).json({ message: 'Error fetching trip', error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
