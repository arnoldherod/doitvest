'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Risks', [
      {
        type: 'Low',
        min: 100,
        max: 1000,
        interest: 0.01,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Medium',
        min: 1001,
        max: 6000,
        interest: 0.025,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Low',
        min: 6001,
        max: 10000,
        interest: 0.03,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Risks', null, {});
  }
};
