const sequelize = require('./../../../config/database');
const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
  Blacklist
    .findOne({ where: { cpf: req.params.cpf } })
    .then(cpf => {

      if (!cpf) {
        return res.json({
          'status': constants.STATUS_200,
          'msg': constants.MSG_FREE,
        });
      }

      return res.json({
        'status': constants.STATUS_200,
        'msg': constants.MSG_BLOCK,
      });

    })
    .catch(error => {
      return res.json({
        'status': constants.STATUS_500,
        'msg': error,
      });
    });

};
