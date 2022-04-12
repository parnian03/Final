const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const login = require('./routes/login');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');
const bcrypt = require('bcrypt');
const session = require('express-session');
const { Console } = require('console');
const { networkInterfaces } = require('os');


const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.urlencoded({extended: false}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login',login);
app.use('/auth', authRouter);


// get route for login page
app.post('/login',(req, ress) => {
  res.render('login');
});


// get route for register page
app.post('/register',(req, res) => {
  res.render('register');
});



//catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Page not Find');
  err.status= 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
