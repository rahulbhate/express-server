const speaker = require('../../db.json');
const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.get('/', (req, res, next) => {
  res.send(speaker);
});

module.exports = router;
