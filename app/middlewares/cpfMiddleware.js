const cpfValidator = require('node-cpf-cnpj');
const constants = require('./../config/constants');

module.exports = (req, res, next) => {
  this.req = req;
  this.res = res;
  this.next = next;

  this.validate();
};

exports.validate = () => {
  let cpf = this.getCpf();

  if (!cpf) {
    return this.returnError();
  }

  cpf = cpfValidator.format(cpf);

  if (!cpfValidator.isValid(cpf)) {
    return this.returnError();
  }

  return this.next();
};

exports.getCpf = () => {
  if (this.req.body.cpf) {
    return this.req.body.cpf;
  }

  if (this.req.params.cpf) {
    return this.req.params.cpf;
  }

  return null;
};

exports.returnError = () => this.res.status(constants.STATUS_404).json({
  msg: constants.MSG_CPF_INVALIDO,
});
