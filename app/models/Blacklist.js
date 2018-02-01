const sequelize = require('./../config/database');

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
      validate: {
        notEmpty: true,
      },
    }
  });

  return Blacklist;
};

