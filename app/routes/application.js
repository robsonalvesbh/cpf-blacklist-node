const express = require('express');

const router = express.Router();

router
  .get('/', require('./../controllers/application/home'))
  .get('/status', require('./../controllers/application/status'));

module.exports = router;
