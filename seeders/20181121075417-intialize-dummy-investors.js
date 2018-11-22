'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Investors', [
        {
          name: 'Zia',
          email: `fauziaazia171097@gmail.com`,
          invest: 100000,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Desy',
          email: `desydummy@snail.com`,
          invest: 10000,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: 'Budi',
          email: `Komo@nail.com`,
          invest: 500,
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Investors', null, {});
  }
};
