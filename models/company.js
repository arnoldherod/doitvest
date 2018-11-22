'use strict';
const {getPassword} = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    borrowed: {type: DataTypes.INTEGER, validate:{min: 100}},
    duration: DataTypes.INTEGER,
    interest: {
      type: DataTypes.FLOAT,
      defaultValue: 0.04
    },
    password: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };

  Company.beforeCreate((input, options) => {
    input.password = getPassword(input.password) 
  })
  return Company;
};