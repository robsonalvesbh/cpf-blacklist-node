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
    .findOne({ where: { cpf: req.params.cpf } })
    .then((cpf) => {
      if (!cpf) {
        res.status(constants.STATUS_404);
        res.json({
          cpf: constants.MSG_FREE,
        });
      }

      res.status(constants.STATUS_200);
      res.json({
        cpf: constants.MSG_BLOCK,
      });
    })
    .catch((error) => {
      res.status(constants.STATUS_500);
      res.json({
        msg: error.errors,
      });
    });
};
