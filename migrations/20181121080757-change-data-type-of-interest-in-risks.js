'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Risks', "interest", { type: Sequelize.FLOAT });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Risks', "interest", { type: Sequelize.INTEGER });

  }
};
