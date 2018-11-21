'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    borrowed: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    interest: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};