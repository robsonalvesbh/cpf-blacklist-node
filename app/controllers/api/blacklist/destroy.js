const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => Blacklist
  .destroy({ where: { cpf: req.params.cpf } })
  .then((cpf) => {
    if (!cpf) {
      return res.status(constants.STATUS_404).json({
        msg: constants.MSG_CPF_NOT_FOUND_ON_BLACKLIST,
      });
    }

    return res.status(constants.STATUS_200).json({
      msg: constants.MSG_CPF_REMOVED_BLACKLIST,
    });
  })
  .catch(error => res.status(constants.STATUS_500).json({
    msg: error.errors,
  }));
