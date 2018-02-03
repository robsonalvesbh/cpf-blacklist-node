const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser());

/**
 * Rotas
 */
const apiRoutes = require('./app/routes/api');
const applicationRoutes = require('./app/routes/application');

app.use('/api/v1', apiRoutes);
app.use('/', applicationRoutes);

/**
 * Configurações das views
 */
app.set('view enginer', 'pug');
app.set('views', path.join(__dirname, 'app/views'));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/')));
app.use('/assets', express.static(path.join(__dirname, '/assets/')));

app.listen(3000, () => console.log('API listening on port 3000'));
