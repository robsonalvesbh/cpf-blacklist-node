
const sequelize = require('./../../config/database');

const Blacklist = sequelize.import('./../../models/Blacklist');
const uptime = require('./../../helpers/uptime');
const memory = require('./../../helpers/memory');

module.exports = (req, res) => {
  Blacklist
    .count()
    .then((quantity) => {
      res.render('status.pug', {
        uptime: uptime.humanizeUptime(),
        memoryUsed: memory.MemoryUsageInMB(),
        queriesExecuted: global.queriesExecuted,
        cpfOnBlacklist: quantity,
      });
    });
};
