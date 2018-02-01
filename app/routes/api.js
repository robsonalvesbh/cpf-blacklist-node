const express = require('express');
const router = express.Router();

router
  .get('/cpf/:cpf', require('./../controllers/api/blacklist/showOne'))
  .get('/cpf', require('./../controllers/api/blacklist/showAll'))
  .post('/cpf', require('./../controllers/api/blacklist/create'))
  .delete('/cpf/:cpf', require('./../controllers/api/blacklist/destroy'));

module.exports = router;
