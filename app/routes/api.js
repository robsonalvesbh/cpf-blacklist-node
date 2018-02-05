const express = require('express');
const cpfMiddleware = require('./../middlewares/cpfMiddleware');

const router = express.Router();

router
  .get('/cpf', require('./../controllers/api/blacklist/findAll'))
  .get('/cpf/:cpf', cpfMiddleware, require('./../controllers/api/blacklist/findOne'))
  .post('/cpf', cpfMiddleware, require('./../controllers/api/blacklist/create'))
  .delete('/cpf/:cpf', cpfMiddleware, require('./../controllers/api/blacklist/destroy'));

router
  .get('/status', require('./../controllers/api/server/status'));


module.exports = router;
