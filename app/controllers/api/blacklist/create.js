const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => Blacklist
  .create(req.body)
  .then(() => res.status(constants.STATUS_201).json({
    msg: constants.MSG_CPF_ADDED_BLACKLIST,
  }))
  .catch((error) => {
    let msg = { msg: error.errors };

    if (error.errors[0].validatorKey === 'not_unique') {
      msg = { msg: constants.MSG_CPF_INCLUDED_BLACKLIST };
    }

    return res.status(constants.STATUS_500).json(msg);
  });
