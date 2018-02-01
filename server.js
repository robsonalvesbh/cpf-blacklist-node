'use strict';

var express = require('express');
var apiRoutes = require('./routes/apiRoutes');

// App
var app = express();
app.use('/api/v1', apiRoutes);

app.listen(8080, () => {
  console.log('API listening on port 8080');
});
