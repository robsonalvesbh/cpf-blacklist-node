const sequelize = require('./../../../config/database');

const Blacklist = sequelize.import('./../../../models/Blacklist');
const constants = require('./../../../config/constants');

module.exports = (req, res) => {
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
