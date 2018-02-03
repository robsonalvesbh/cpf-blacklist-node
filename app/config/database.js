const Sequelize = require('sequelize');

global.queriesExecuted = 0;

const sequelize = new Sequelize('sqlite://./database/db.sqlite', {
  operatorsAliases: Sequelize.Op,
  logging: (query) => {
    console.log(query);
    global.queriesExecuted += 1;
  },
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync();

module.exports = sequelize;
