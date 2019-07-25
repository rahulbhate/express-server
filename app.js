require('./db_connection.js');

const express = require('express');

const cors = require('cors');
const app = express();
const port = 8080;

const speaker = require('./db.json');

app.use(cors());
app.get('/', (req, res, next) => res.send(speaker));
app.get('/sessions', (req, res, next) => res.send(speaker));
app.post('/speakers', (req, res, next) => res.send(speaker));
app.get('/user', (req, res, next) =>
  res.status(200).json({ message: 'It Works' }),
);
app.get('/user/:userId', (req, res, next) =>
  res.status(200).json({ message: req.params.userId }),
);
app.listen(port);
