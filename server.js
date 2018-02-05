const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.use('/dist', express.static(path.join(__dirname, '/dist/')));

app.listen(3000);
