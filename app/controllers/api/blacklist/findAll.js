const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => Blacklist
  .findAll()
  .then(cpf => res.status(constants.STATUS_200).json({
    cpf,
  }))
  .catch(error => res.status(constants.STATUS_500).json({
    msg: error.errors,
  }));
