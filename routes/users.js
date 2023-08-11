var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getUser', function(req, res, next) {
  const queryParam = req.query;
  res.send(queryParam);
});

router.post('/createUser', function(req, res, next) {
  const bodyObj = req.body;
  res.send(bodyObj);
});

router.put('/updateUser', function(req, res, next) {
  res.send('update User');
});

router.delete('/deleteUser', function(req, res, next) {
  res.send('Delete User');
});




module.exports = router;
