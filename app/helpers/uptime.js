const moment = require('moment');

module.exports = {
  humanizeUptime: () => {
    const time = moment.duration(Math.floor(process.uptime()), 'seconds');

    return `${time.hours()} horas ${time.minutes()} minutos e ${time.seconds()} segundos`;
  },
};
