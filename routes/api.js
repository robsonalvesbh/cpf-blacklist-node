var express = require('express');
var router = express.Router();

const FREE = 'FREE';

router.get('/cpf/:cpf', (req, res) => {
  return res.json({
    'cpf': FREE
  });
});

router.get('/status', (req, res) => {
  return res.json({
    'status': 200
  });
});

module.exports = router;