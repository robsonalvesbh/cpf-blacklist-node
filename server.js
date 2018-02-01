'use strict';

const express = require('express');
const apiRoutes = require('./routes/api');

// App
const app = express();
app.use('/api/v1', apiRoutes);

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
