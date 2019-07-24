const mongoose = require('mongoose');

const GroceryItemSchema = new mongoose.Schema({
  name: String,
  purchased: Boolean,
  id: String,
});

module.exports = mongoose.model('GroceryItem', GroceryItemSchema);
