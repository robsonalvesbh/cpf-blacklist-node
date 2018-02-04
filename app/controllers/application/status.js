
const sequelize = require('./../../config/database');

const Blacklist = sequelize.import('./../../models/Blacklist');
const uptimeHelper = require('./../../helpers/uptimeHelper');
const memoryHelper = require('./../../helpers/memoryHelper');
const monitoringQueries = require('./../../config/monitoringQueries');

module.exports = (req, res) => Blacklist
  .count()
  .then(quantity => res.render('status.pug', {
    uptime: uptimeHelper.humanizeUptime(),
    memoryUsed: memoryHelper.getMemoryUsed(),
    queriesExecuted: monitoringQueries.queriesExecuted,
    cpfOnBlacklist: quantity,
  }));

