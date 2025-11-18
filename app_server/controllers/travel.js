const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET travel view
const travel = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec(); // read from MongoDB
    res.render('travel', {
      title: 'Travlr Getaways',
      trips
    });
  } catch (err) {
    console.error('Error fetching trips for travel page:', err);
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: []
    });
  }
};

module.exports = {
  travel
};


