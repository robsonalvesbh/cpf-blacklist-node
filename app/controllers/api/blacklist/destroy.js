const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
  Blacklist
    .destroy({ where: { cpf: req.params.cpf } })
    .then((cpf) => {
      if (!cpf) {
        res.status(constants.STATUS_404);
        return res.json({
          msg: constants.MSG_CPF_NOT_FOUND_ON_BLACKLIST,
        });
      }

      res.status(constants.STATUS_200);
      return res.json({
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
