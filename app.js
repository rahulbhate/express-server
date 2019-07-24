//require('./dbConnection.js');
const mongoose = require('mongoose');

const express = require('express');

const cors = require('cors');
const app = express();
const port = 8080;

const speaker = require('./db.json');

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@cluster0-pbkmp.mongodb.net/${
  process.env.MONGO_DB
}?retryWrites=true&w=majority`;

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
  const collection = client.db('react-serverside-dev').collection('web');
  console.log('connected');
  var ins = { name: 'rahul', email: 'rbhate@aaigl.com.au' };
  myCursor = collection.find({ name: 'rahul' });
  collection.insertOne(ins, function(err, res) {
    console.log('Data Inseted');
    //console.log(myCursor);
  });
});
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(cors());
app.get('/', (req, res, next) => res.send(speaker));
app.get('/sessions', (req, res, next) => res.send(speaker));

app.listen(8080);
