'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investor = sequelize.define('Investor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    invest: DataTypes.INTEGER
  }, {});
  Investor.associate = function(models) {
    // associations can be defined here
  };
  return Investor;
};