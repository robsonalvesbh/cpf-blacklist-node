const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
  Blacklist
    .create(req.body)
    .then(() => res.json({
      status: constants.STATUS_200,
      msg: constants.MSG_CPF_ADDED_BLACKLIST,
    }))
    .catch(error => res.json({
      status: constants.STATUS_500,
      msg: error,
    }));
};
