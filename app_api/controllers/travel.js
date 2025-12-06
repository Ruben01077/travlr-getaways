
const mongoose = require('mongoose');
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

// POST 
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// PUT 
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },     
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// DELETE 
const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({ code: req.params.tripCode });

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    
    return res.status(204).json(null);
  } catch (err) {
    return res.status(400).json(err);
  }
};


module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};