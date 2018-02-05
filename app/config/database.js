const Sequelize = require('sequelize');
const monitoringQueries = require('./monitoringQueries');

const databaseName = process.env.NODE_ENV === 'test' ? 'test_db' : 'db';

const sequelize = new Sequelize(`sqlite://./database/${databaseName}.sqlite`, {
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

sequelize.sync({ force: true });

module.exports = sequelize;
