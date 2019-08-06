require('./db_connection.js');
const usersRoute = require('./api/routes/users');
const speakersRoute = require('./api/routes/speakers');
const sessionsRoute = require('./api/routes/sessions');
const signupRoute = require('./api/routes/signup');
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
const User = require('./server/models/user');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/speakers', speakersRoute);
app.use('/sessions', sessionsRoute);
app.use('/users', usersRoute);
app.use('/', signupRoute);
app.use('/login', signupRoute);
app.use('/profile', signupRoute);
app.listen(port);
