const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/travel');
const authCtrl = require('../controllers/auth');
const { requireAuth } = require('../middleware/auth');

router
  .route('/trips')
  .get(ctrlTrips.tripsList)
  .post(requireAuth, ctrlTrips.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode)
  .put(requireAuth, ctrlTrips.tripsUpdateTrip)     
  .delete(requireAuth, ctrlTrips.tripsDeleteTrip); 


router
  .route('/users/login')
  .post(authCtrl.login);

module.exports = router;