const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const hbs = require('hbs');


const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));





const indexRouter  = require('./app_server/routes/index');
const usersRouter  = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
var handlebars = require("hbs")

handlebars.registerPartials(__dirname + "app_server/views/partials")

app.set("views", path.join(__dirname, "app_server", "views"))
app.set("view engine", "hbs")
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));





app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);


// catch 404 error

app.use(function(req, res, next){

  next(createError(404))

})

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  // Render a template if you have one; otherwise send text
  try {
    res.render('error');
  } catch {
    res.send('Error: ' + res.locals.message);
  }
});


app.use(function (err, req, res, next) {

    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}



  })

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});





app.listen(port, () => {
  console.log(`Travlr Getaways app listening at http://localhost:${port}`);
});


