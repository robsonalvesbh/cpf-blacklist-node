const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');
const cpfValidator = require('node-cpf-cnpj');

module.exports = (req, res) => {
  req.params.cpf = cpfValidator.format(req.params.cpf);

  if (!cpfValidator.isValid(req.params.cpf)) {
    res.status(constants.STATUS_404);
    res.json({
      msg: constants.MSG_CPF_INVALIDO,
    });
  }

  Blacklist
    .destroy({ where: { cpf: req.params.cpf } })
    .then((cpf) => {
      if (!cpf) {
        res.status(constants.STATUS_404);
        res.json({
          msg: constants.MSG_CPF_NOT_FOUND_ON_BLACKLIST,
        });
      }

      res.status(constants.STATUS_200);
      res.json({
        msg: constants.MSG_CPF_REMOVED_BLACKLIST,
      });
    })
    .catch((error) => {
      res.status(constants.STATUS_500);
      res.json({
        msg: error.errors,
      });
    });
};
