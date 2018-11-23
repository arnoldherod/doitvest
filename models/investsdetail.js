'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvestsDetail = sequelize.define('InvestsDetail', {
    investorId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  InvestsDetail.associate = function(models) {
    InvestsDetail.belongsTo(models.Investor, {through: "InvestsDetail", foreignKey: "investorId"})
    InvestsDetail.belongsTo(models.Company, {through: "InvestsDetail", foreignKey: "companyId"})
  };
  return InvestsDetail;
};