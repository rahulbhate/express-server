const storeProducts = require('../../products.json');
const express = require('express');
const router = express.Router();

router.get('/products', (req, res, next) => {
  res.send(storeProducts);
});

module.exports = router;
