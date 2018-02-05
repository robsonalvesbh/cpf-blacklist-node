const constants = require('./../config/constants');

module.exports = (req, res, next) => {
  if (req.url.search('/api/v1') === 0) {
    return res.status(404).json({ msg: constants.REQUEST_NOT_FOUND });
  }

  res.status(404).render('errors/404.pug');
  return next();
};
