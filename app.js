require('./db_connection.js');
const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors');
const app = express();
const port = 8080;

const speaker = require('./db.json');
const User = require('./server/models/user');
app.use(cors());
app.get('/', (req, res, next) => res.send(speaker));
app.get('/sessions', (req, res, next) => res.send(speaker));
app.post('/speakers', (req, res, next) => res.send(speaker));
app.get('/user', (req, res, next) =>
  res.status(200).json({ message: 'It Works' }),
);
app.post('/user/:userId', (req, res, next) =>
  res.status(200).json({ message: req.body }),
);
app.get('/signup/', (req, res, next) => {
  let email = req.query.email;
  let password = req.query.password;
  console.log(email, password);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.query.email,
    password: req.query.password,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json({ email: email, password: password });
});
app.listen(port);
