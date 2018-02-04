const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');
const cpfValidator = require('node-cpf-cnpj');

module.exports = (req, res) => {
  req.params.cpf = cpfValidator.format(req.params.cpf);

  if (!cpfValidator.isValid(req.params.cpf)) {
    return res.status(constants.STATUS_404).json({
      msg: constants.MSG_CPF_INVALIDO,
    });
  }

  return Blacklist
    .findOne({ where: { cpf: req.params.cpf } })
    .then((cpf) => {
      if (!cpf) {
        return res.status(404).json({
          cpf: constants.MSG_FREE,
        });
      }

      return res.status(200).json({
        cpf: constants.MSG_BLOCK,
      });
    })
    .catch(error => res.status(500).json({
      msg: error.errors,
    }));
};
