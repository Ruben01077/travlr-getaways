// app_server/controllers/travel.js

const apiOptions = {
  server: 'http://localhost:3000'
};

// Helper to call the API
const _renderTravelPage = (req, res, trips) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips
  });
};

// GET /travel - use API to get trips
const travel = async (req, res) => {
  const path = '/api/trips';

  try {
    const response = await fetch(`${apiOptions.server}${path}`);
    
    if (!response.ok) {
      console.error('Error response from API:', response.status);
      return res.render('travel', {
        title: 'Travlr Getaways',
        trips: [],
        message: 'Could not load trips at this time.'
      });
    }

    const trips = await response.json();
    _renderTravelPage(req, res, trips);
  } catch (err) {
    console.error('Error calling API:', err);
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: [],
      message: 'Error contacting API.'
    });
  }
};

module.exports = {
  travel
};



