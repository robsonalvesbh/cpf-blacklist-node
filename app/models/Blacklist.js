const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Blacklist = sequelize.define('blacklist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
      },
    },
  });

  return Blacklist;
};

