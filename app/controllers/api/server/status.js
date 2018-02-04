const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');
const uptimeHelper = require('./../../../helpers/uptimeHelper');
const memoryHelper = require('./../../../helpers/memoryHelper');

module.exports = (req, res) => Blacklist
  .count()
  .then(quantity => res.status(constants.STATUS_200).json({
    uptime: uptimeHelper.humanizeUptime(),
    memoryUsed: memoryHelper.getMemoryUsed(),
    queriesExecuted: global.queriesExecuted,
    cpfOnBlacklist: quantity,
  }));
