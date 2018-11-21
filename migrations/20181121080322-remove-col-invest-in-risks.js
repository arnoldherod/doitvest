'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Risks", "amount")
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Risks", "amount", {type: Sequelize.INTEGER})
  }
};
