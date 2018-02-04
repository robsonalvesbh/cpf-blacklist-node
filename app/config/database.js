const Sequelize = require('sequelize');
let monitoringQueries = require('./monitoringQueries');

const sequelize = new Sequelize('sqlite://./database/db.sqlite', {
  operatorsAliases: Sequelize.Op,
  logging: (query) => {
    console.log(query);
    monitoringQueries.queriesExecuted += 1;
  },
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync();

module.exports = sequelize;
