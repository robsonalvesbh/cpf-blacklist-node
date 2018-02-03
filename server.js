const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./app/routes/api');
const applicationRoutes = require('./app/routes/application');

const app = express();

app.set('view enginer', 'pug');
app.set('views', path.join(__dirname, 'app/views'));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/')));
app.use('/assets', express.static(path.join(__dirname, '/assets/')));

app.use(bodyParser());

app.use('/api/v1', apiRoutes);
app.use('/', applicationRoutes);

app.listen(3000, () => console.log('API listening on port 3000'));
