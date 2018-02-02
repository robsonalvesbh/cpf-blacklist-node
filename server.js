'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const apiRoutes = require('./app/routes/api');
const sequelize = require('./app/config/database');

const app = express();
app.use(bodyParser());

app.use('/api/v1', apiRoutes);

app.listen(3000, () => console.log('API listening on port 3000'));
