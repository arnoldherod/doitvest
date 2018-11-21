'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvestsDetail = sequelize.define('InvestsDetail', {
    investorId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  InvestsDetail.associate = function(models) {
    // associations can be defined here
  };
  return InvestsDetail;
};