const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => Blacklist
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
