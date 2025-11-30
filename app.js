const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const hbs = require('hbs');
require('./app_api/models/db');
const app = express();
const port = 3000;

// Routers
const indexRouter  = require('./app_server/routes/index');
const usersRouter  = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
const apiRouter    = require('./app_api/routes/index');


// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  // If you create an error.hbs view, this will render it
  res.render('error');
});

// Start server
app.listen(port, () => {
  console.log(`Travlr Getaways app listening at http://localhost:${port}`);
});

module.exports = app;
