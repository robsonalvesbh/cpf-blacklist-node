const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite://./database/db.sqlite', { operatorsAliases: Sequelize.Op });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

module.exports = sequelize;
