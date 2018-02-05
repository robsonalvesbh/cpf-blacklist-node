const cpfValidator = require('node-cpf-cnpj');
const constants = require('./../config/constants');

module.exports = (req, res, next) => {
  this.req = req;
  this.res = res;
  this.next = next;

  this.validate();
};

exports.validate = () => {
  const cpf = this.getCpf();

  if (!cpf) {
    return this.returnError();
  }

  if (!cpfValidator.isValid(cpf)) {
    return this.returnError();
  }

  return this.next();
};

exports.getCpf = () => {
  if (this.req.body.cpf) {
    this.req.body.cpf = cpfValidator.format(this.req.body.cpf);
    return this.req.body.cpf;
  }

  if (this.req.params.cpf) {
    this.req.params.cpf = cpfValidator.format(this.req.params.cpf);
    return this.req.params.cpf;
  }

  return null;
};

exports.returnError = () => this.res.status(constants.STATUS_404).json({
  msg: constants.MSG_CPF_INVALIDO,
});
