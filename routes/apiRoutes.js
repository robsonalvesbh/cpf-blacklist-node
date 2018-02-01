var express = require('express');
var router = express.Router();

router.get('/cpf/:cpf', (req, res) => {
  return res.json({
    'cpf' : req.params.cpf
  });
});

router.get('/status', (req, res) => {
  return res.json({
    'status' : 200
  });
});

module.exports = router;
