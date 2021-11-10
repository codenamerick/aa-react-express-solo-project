'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Albums', [
        {
          userId: 1,
          title: 'Juice WRLD',
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524559/album-art-2_xsi88y.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: 'New Hip Hop Bangerz',
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524558/album-art-5_i4p7tg.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          title: 'Honcho',
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524553/album-art-6_m7adi7.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: 'Old City Lights',
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524558/album-art-1_i7ida0.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
