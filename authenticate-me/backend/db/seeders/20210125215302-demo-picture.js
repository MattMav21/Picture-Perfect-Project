'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Pictures', [
    {
       imageLink: 'merlin_179583855_1ecb4f17-5736-4c26-98e0-af8db8e664b4-superJumbo.jpg',
       title: 'Anamaniacs',
       description: 'My favorite show growing up! :-)',
       userId: 1,
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Pictures', null, {})
  }
};
