const storeProducts = require('../../products.json');
const express = require('express');
const router = express.Router();

router.get('/products', (req, res, next) => {
  res.send(storeProducts);
});

router.post('/cart', (req, res) => {
  //generates the list of products in the cart
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
