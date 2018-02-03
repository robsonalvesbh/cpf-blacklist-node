const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
  Blacklist
    .findOne({ where: { cpf: req.params.cpf } })
    .then((cpf) => {
      if (!cpf) {
        res.status(constants.STATUS_404);
        return res.json({
          cpf: constants.MSG_FREE,
        });
      }

      res.status(constants.STATUS_200);
      return res.json({
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