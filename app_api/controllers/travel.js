// app_server/controllers/travel.js
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET travel view using MongoDB data
const travel = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();
    console.log('Trips found for travel page:', trips.length);

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
