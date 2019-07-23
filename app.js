const express = require('express');
var cors = require('cors');
const app = express();
const port = 8080;
const person = {
  name: 'rahul',
  surname: 'bhate',
  todayDate: new Date(),
  email: 'rbhate@aaigl.com.au',
  phone: '1285677443423',
};
var speaker = require('./db.json');

/*var mysql = require('mysql');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Veda@3!6',
  database: 'nextreactnodeproject',
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT * FROM customers', function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/
app.use(cors());
app.get('/', (req, res) => res.send(speaker));
app.get('/sessions', (req, res) => res.send(speaker));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
