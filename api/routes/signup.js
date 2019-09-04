const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../server/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
router.post('/signup', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  User.find({ email: email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Mail Exists',
        });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: 'User Created',
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
            res.status(200).json({ email: email, password: password });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
router.post('/login', (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth Failed',
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth Failed',
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            'secret',
            { expiresIn: 30 },
          );
          return res.status(200).json({
            message: 'Auth Successful',
            token: token,
          });
        }
        res.status(401).json({
          message: 'Austh Failed',
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.post('/logout', (req, res, next) => {
  res.status(200).json({
    message: 'Logged out',
  });
});
router.get('/', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], 'secret');
  console.log('DECODED', decoded);
  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send('user does not exists');
      }
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
