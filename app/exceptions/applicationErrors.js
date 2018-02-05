const constants = require('./../config/constants');

module.exports = (err, req, res, next) => {
  res.json({ msg: constants.INTERNAL_SERVER_ERROR });
  next();
};
