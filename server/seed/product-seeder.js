var Product = require('../models/product');

var products = [
  new Product({
    title: 'Google Pixel - Green',
    price: 200,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - white',
    price: 300,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - Red',
    price: 400,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - Pink',
    price: 500,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - Purple',
    price: 600,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - Black',
    price: 700,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - White',
    price: 800,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - Gray',
    price: 900,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
  new Product({
    title: 'Google Pixel - Yellow',
    price: 1000,
    image: 'https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg',
    GST: 'excl GST',
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done == products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
