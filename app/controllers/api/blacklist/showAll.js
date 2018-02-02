const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
  Blacklist
    .findAll()
    .then(cpf => res.json({
      status: constants.STATUS_200,
      cpf,
    }))
    .catch(error => res.json({
      status: constants.STATUS_500,
      msg: error,
    }));
};
