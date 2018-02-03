const express = require('express');

const router = express.Router();

router
  .get('/', require('./../controllers/application/home'));

module.exports = router;
