// app_server/controllers/travel.js

// Load trips.json
const tripsData = require("../../data/trips.json")

// GET travel page (dynamic)
const travel = (req, res) => {
    res.render("travel", { 
        title: "Travlr Getaways",
        trips: tripsData
    });
};

module.exports = {
    travel
};


