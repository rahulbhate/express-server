const speaker = require('../../db.json');
const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
router.get('/speakers', (req, res, next) => {
  res.send(speaker);
});

router.get('/speaker/:speakerId', (req, res) => {
  console.log('router called');
  const actualPage = '/speaker';
  const queryParams = { spekerId: req.params.spekerId };
  res.send(speaker);
  console.log(res);
});
module.exports = router;
