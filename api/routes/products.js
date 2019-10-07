const Product = require('../../server/models/product');
const express = require('express');
const router = express.Router();

router.get('/products/', (req, res, next) => {
  let start = parseInt(req.query.start);
  let limits = parseInt(req.query.limit);
  console.log(start, limits);
  Product.find()
    .limit(limits)
    .skip(start)
    .exec()
    .then((storeProducts) => {
      res.send(storeProducts);
    });
});

router.post('/cart', (req, res) => {
  //generates the list of products in the cart
  console.log('Route Called');
  let products = [],
    id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(products);
  for (var i = 0; i < data.products.length; i++) {
    id = data.products[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      data.products[i].qty = cart[id];
      products.push(data.products[i]);
    }
  }
  return res.json(products);
});
module.exports = router;
