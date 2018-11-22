'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Companies", "interest",{type: Sequelize.FLOAT, defaultValue: 0.04})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Companies", "interest", {type: Sequelize.INTEGER, defaultValue: null})
  }
};
