'use strict';
const {getPassword} = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Investor = sequelize.define('Investor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    invest: {type: DataTypes.INTEGER, validate: {min: 100}},
    password: DataTypes.STRING,
    riskId: DataTypes.INTEGER
  }, {});
  Investor.associate = function(models) {
    Investor.belongsTo(models.Risk, {foreignKey: "riskId"})
    Investor.belongsToMany(models.Company, {through: "InvestsDetail", foreignKey: "investorId"})
  };

  Investor.beforeCreate((input, options) => {
    input.password = getPassword(input.password) 
  })

  Investor.prototype.formatUang = function(){
    return `Rp. ${new Intl.NumberFormat(['id'], {maximumSignificantDigist: 3}).format(this.invest)}`
  }

  return Investor;
};