const express = require('express');

const router = express.Router();

router
  .get('/cpf/:cpf', require('./../controllers/api/blacklist/findOne'))
  .get('/cpf', require('./../controllers/api/blacklist/findAll'))
  .post('/cpf', require('./../controllers/api/blacklist/create'))
  .delete('/cpf/:cpf', require('./../controllers/api/blacklist/destroy'));

router
  .get('/status', require('./../controllers/api/server/status'));

module.exports = router;
