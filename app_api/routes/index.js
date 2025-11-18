const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/travel');
const apiRouter = require('./app_api/routes/index');


app.use('/api', apiRouter);


router
  .route('/trips')
  .get(ctrlTrips.tripsList);

router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode);

module.exports = router;
