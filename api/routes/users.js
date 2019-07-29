const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /users',
  });
});
router.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  res.status(200).json({
    UserId: id,
  });
});
router.post('/', (req, res, next) => {
  var query1 = req.body.firstName;
  var query2 = req.body.lastName;
  console.log(query1, query2);
  res.status(200).json({ firstName: query1, lastName: query2 });
});
module.exports = router;
