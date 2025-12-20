Project Overview

Travlr Getaways is a full stack web application developed for my CS 465 course. It allows users to browse and view travel packages and supports an administrative interface for managing trips and travel data. The application was built using the MEAN stack, MongoDB, Express, Angular, and Node.js, and demonstrates integration of frontend, backend, API, database, and authentication concepts.

The repository includes the complete application: server API, frontend views, MongoDB connection, seed data, and admin interface.

Architecture
Frontend Development

This project incorporates multiple frontend strategies:

Express HTML Views, These server-rendered views use Handlebars templates to generate dynamic pages served directly from Express. This is ideal for public pages where SEO and initial load speed are important. 
GitHub

JavaScript Enhancements, Client-side JavaScript augments interactivity on forms and UI components across the public pages.

Single-Page Application (SPA), The travlr-admin folder contains a separate admin interface (Angular SPA) that consumes backend APIs for managing content dynamically without full page reloads.

Each of these approaches serves a specific purpose: Express HTML for straightforward content delivery, JavaScript for interactive elements, and SPA for richer administrative UX.

Why NoSQL MongoDB?

The backend stores data in MongoDB, a NoSQL document database. MongoDB’s JSON-like structure makes it a natural fit for JavaScript and modern web stacks. It allows flexible data schemas for travel packages and user data and scales well with evolving project needs. 
GitHub

Functionality
JSON vs JavaScript

Although JSON (JavaScript Object Notation) resembles JavaScript object syntax, they are different:

JavaScript is a full programming language used to build application logic.

JSON is a lightweight data format used for exchanging information between client and server.

In this project, frontend components send and receive data in JSON format. JSON enables consistent data exchange between Angular admin views, Express API endpoints, and database queries, helping tie the frontend and backend together.

Refactoring & UI Component Reuse

During development, I refactored sections of code for improved efficiency and modularity:

Common API logic was centralized instead of duplicated

Frontend UI elements were made reusable

API data handlers were standardized

This allowed cleaner code, easier maintenance, and faster implementation of new features.

Testing
API Endpoints, Methods, and Security

Testing API routes is essential to ensure they correctly handle the core HTTP methods:

GET — Retrieve travel packages

POST — Create new trips

PUT — Update existing data

DELETE — Remove entries

Authentication layers (e.g., admin access) introduce security checks. This requires careful testing to confirm that unauthorized users cannot access protected routes and valid credentials grant appropriate privileges. Using tools like Postman helped validate expected behaviors across endpoints and security constraints.

Reflection

This course project expanded my skillset in critical areas of modern full stack development. I gained practical experience with:

Designing and building integrated systems using the MEAN stack

Working with both server-rendered views and SPAs

Implementing secure API endpoints and managing database interactions

Refactoring code and optimizing for reuse

These competencies strengthen my ability to contribute to real-world web application development and make me a more competitive candidate in the software engineering job market.
