'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Masako Ltd.',
        email: `jail412@hotmail.com`,
        borrowed: 100000,
        duration: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Komasak Ltd.',
        email: `jklsh@hotmail.com`,
        borrowed: 100,
        duration: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ABC Ltd.',
        email: `def@hotmail.com`,
        borrowed: 1000,
        duration: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Miwon Ltd.',
        email: `Miwon@snail.com`,
        borrowed: 1500,
        duration: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
