const Sequelize = require('sequelize');
const monitoringQueries = require('./monitoringQueries');

const databaseName = process.env.NODE_ENV === 'test' ? 'test_db' : 'db';

const sequelize = new Sequelize(`sqlite://./database/${databaseName}.sqlite`, {
  operatorsAliases: Sequelize.Op,
  logging: () => {
    monitoringQueries.queriesExecuted += 1;
  },
});

sequelize.sync({ force: true });

module.exports = sequelize;
