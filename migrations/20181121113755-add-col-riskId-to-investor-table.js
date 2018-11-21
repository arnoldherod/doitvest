'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Investors', "riskId", { type: Sequelize.INTEGER });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Investors', "riskId");
  }

};
