'use strict';
module.exports = (sequelize, DataTypes) => {
  const Risk = sequelize.define('Risk', {
    type: DataTypes.STRING,
    min: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
    interest: DataTypes.FLOAT
  }, {});
  Risk.associate = function(models) {
    Risk.hasMany(models.Investor, {foreignKey: "riskId"})
  };
  return Risk;
};