📘 Travlr Getaways
Full Stack MEAN Application (MongoDB, Express, Node.js)

This project is part of SNHU CS-465 Module 4.
It demonstrates connecting an Express application to MongoDB using Mongoose and populating the database with seed data for the Travlr Getaways website.

📦 Project Setup Instructions
     ✔ 1. Install Dependencies

            From the project root, run:

            npm install (This installs Express, Mongoose, Handlebars, and other required packages.)

     🗄 2. Start MongoDB   

            Ensure MongoDB Community Edition is installed and running.

            Windows (MongoDB installed as a service):

            MongoDB usually starts automatically.

            If not, run: net start MongoDB

     🌱 3. Seed the Database (Important!)

            Before running the app, populate MongoDB with sample trip data:   

            node app_api/models/tripSeeder.js  (This script reads the trips.json file and inserts the data into the travlr database.)

            Without running the seeder, the /travel page will show no trips, because the site reads from MongoDB, not from the JSON file.

     ▶️ 4. Start the Application  

            Run the server:

            npm start



travlr-getaways/
│
├── app_api/
│   ├── models/
│   │    ├── db.js            // MongoDB connection
│   │    ├── trips.js         // Trip schema/model
│   │    ├── tripSeeder.js    // Seeds data into MongoDB
│   │
│   ├── controllers/          // API controllers
│   ├── routes/               // API routes (/api)
│
├── app_server/
│   ├── views/                // Handlebars templates
│   ├── controllers/          // Server-side controllers
│   ├── routes/               // Page routes (/travel)
│
├── public/                   // CSS, images, static files
│
├── trips.json                // Seed data file
├── app.js                    // Main Express app
└── package.json
