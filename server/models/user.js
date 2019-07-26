const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
