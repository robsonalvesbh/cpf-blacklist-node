const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');
const uptime = require('./../../../helpers/uptime');
const memory = require('./../../../helpers/memory');

module.exports = (req, res) => {
  Blacklist
    .count()
    .then((quantity) => {
      res.status(constants.STATUS_200);
      res.json({
        uptime: uptime.humanizeUptime(),
        memoryUsed: memory.MemoryUsageInMB(),
        queriesExecuted: global.queriesExecuted,
        cpfOnBlacklist: quantity,
      });
    });
};
