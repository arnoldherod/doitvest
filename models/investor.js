'use strict';
const {getPassword} = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Investor = sequelize.define('Investor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    invest: DataTypes.INTEGER,
    password: DataTypes.STRING,
    riskId: DataTypes.INTEGER
  }, {});
  Investor.associate = function(models) {
    Investor.belongsTo(models.Risk, {foreignKey: "riskId"})
  };

  Investor.beforeCreate((input, options) => {
    input.password = getPassword(input.password) 
  })
  return Investor;
};