const mongoose = require('mongoose');
require('./trips'); 

const Trip = mongoose.model('Trip');
const tripData = require('../../data/trips.json');

// 1. CONNECT TO DB
mongoose.connect('mongodb://127.0.0.1:27017/travlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedTrips = async () => {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(tripData);
    
    console.log('Trips collection seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding:', err);
    mongoose.connection.close();
  }
};

seedTrips();
