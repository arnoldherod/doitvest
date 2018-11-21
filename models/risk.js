'use strict';
module.exports = (sequelize, DataTypes) => {
  const Risk = sequelize.define('Risk', {
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    interest: DataTypes.INTEGER
  }, {});
  Risk.associate = function(models) {
    // associations can be defined here
  };
  return Risk;
};