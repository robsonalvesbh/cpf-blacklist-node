const moment = require('moment');
const sequelize = require('./../../config/database');

const Blacklist = sequelize.import('./../../models/Blacklist');

module.exports = (req, res) => {
  Blacklist
    .count()
    .then((quantity) => {
      res.render('status.pug', {
        uptime: moment.duration(Math.floor(process.uptime()), 'seconds'),
        memoryUsage: process.memoryUsage(),
        queriesExecuted: global.queriesExecuted,
        cpfOnBlacklist: quantity,
      });
    });
};
