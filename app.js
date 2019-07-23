const express = require('express');
var cors = require('cors');
const app = express();
const port = 8080;

var speaker = require('./db.json');

app.use(cors());
app.get('/', (req, res) => res.send(speaker));
app.get('/sessions', (req, res) => res.send(speaker));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
