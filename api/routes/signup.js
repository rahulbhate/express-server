const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../server/models/user');

router.post('/', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: email,
    password: password,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).json({ email: email, password: password });
});
module.exports = router;
