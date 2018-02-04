const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');
const cpfValidator = require('node-cpf-cnpj');

module.exports = (req, res) => {
  req.body.cpf = cpfValidator.format(req.body.cpf);

  if (!cpfValidator.isValid(req.body.cpf)) {
    res.status(constants.STATUS_404);
    res.json({
      msg: constants.MSG_CPF_INVALIDO,
    });
  }

  Blacklist
    .create(req.body)
    .then(() => {
      res.status(constants.STATUS_201);
      res.json({
        msg: constants.MSG_CPF_ADDED_BLACKLIST,
      });
    })
    .catch((error) => {
      res.status(constants.STATUS_500);
      res.json({
        msg: error.errors,
      });
    });
};
