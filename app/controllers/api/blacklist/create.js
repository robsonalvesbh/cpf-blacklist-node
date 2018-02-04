const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');
const cpfValidator = require('node-cpf-cnpj');

module.exports = (req, res) => {
  req.body.cpf = cpfValidator.format(req.body.cpf);

  if (!cpfValidator.isValid(req.body.cpf)) {
    return res.status(constants.STATUS_404).json({
      msg: constants.MSG_CPF_INVALIDO,
    });
  }

  return Blacklist
    .create(req.body)
    .then(() => res.status(constants.STATUS_201).json({
      msg: constants.MSG_CPF_ADDED_BLACKLIST,
    }))
    .catch(error => res.status(constants.STATUS_500).json({
      msg: error.errors,
    }));
};
