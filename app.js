require('./db_connection.js');
const usersRoute = require('./api/routes/users');
const speakersRoute = require('./api/routes/speakers');
const sessionsRoute = require('./api/routes/sessions');
const signupRoute = require('./api/routes/signup');
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;
const User = require('./server/models/user');
//...

// CORS middleware
app.use(function(req, res, next) {
  // Allow Origins
  res.header('Access-Control-Allow-Origin', '*');
  // Allow Methods
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  );
  // Allow Headers
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Accept, Content-Type, Authorization',
  );
  // Handle preflight, it must return 200
  if (req.method === 'OPTIONS') {
    // Stop the middleware chain
    return res.status(200).end();
  }
  // Next middleware
  next();
});
// Auth middleware
/*app.use((req, res, next) => {
  // login does not require jwt verification
  if (req.path == '/login') {
    // next middleware
    return next();
  }

  // get token from request header Authorization
  const token = req.headers.authorization;

  // Debug print
  console.log('');
  console.log(req.path);
  console.log('authorization:', token);

  // Token verification
  try {
    var decoded = jwt.verify(token, jwtSecret);
    console.log('decoded', decoded);
  } catch (err) {
    // Catch the JWT Expired or Invalid errors
    return res.status(401).json({ msg: err.message });
  }

  // next middleware
  next();
});*/
//...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/speakers', speakersRoute);
app.use('/sessions', sessionsRoute);
app.use('/users', usersRoute);
app.use('/', signupRoute);
app.use('/profile', signupRoute);
app.listen(port);
