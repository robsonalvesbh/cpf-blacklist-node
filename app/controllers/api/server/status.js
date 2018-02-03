const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
  Blacklist
    .count()
    .then((quantity) => {
      res.status(constants.STATUS_200);
      res.json({
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        queriesExecuted: global.queriesExecuted,
        cpfOnBlacklist: quantity,
      });
    });
};
