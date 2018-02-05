const sequelize = require('./../../config/database');
const constants = require('./../../config/constants');

const Blacklist = sequelize.import('./../../models/Blacklist');

module.exports = (req, res) => {
  Blacklist
    .findAll()
    .then(cpf => res.render('home.pug', {
      CpfList: cpf,
      url: `${constants.ENDPOINT_API_V1}/cpf/`,
    }));
};
