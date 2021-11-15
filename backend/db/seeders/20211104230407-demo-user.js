'use strict';
const bcrypt = require('bcryptjs');
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Users', [
        {
          email: 'demo@user.io',
          username: 'Demo-user',
          profileImageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636980908/jessica-felicio-QS9ZX5UnS14-unsplash_bkkqar.jpg',
          bio: 'Thanks for stopping by. Hope you enjoy my latest uploads.',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: faker.internet.email(),
          username: 'Hipzter21',
          profileImageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636973709/amir-seilsepour-5vg_SarQimA-unsplash_q2wbgx.jpg',
          bio: 'Thanks for stopping by. Hope you enjoy my latest uploads.',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: 'KingRap$',
          profileImageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636980906/ayo-ogunseinde-sibVwORYqs0-unsplash_iwco5f.jpg',
          bio: 'Thanks for stopping by. Hope you enjoy my latest uploads.',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: 'ModernMozart',
          profileImageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636980907/austin-wade-X6Uj51n5CE8-unsplash_q0wnwf.jpg',
          bio: 'Thanks for stopping by. Hope you enjoy my latest uploads.',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: 'LanaLA',
          profileImageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636980906/joanna-nix-walkup-p7zGmc33s0U-unsplash_gskoli.jpg',
          bio: 'Thanks for stopping by. Hope you enjoy my latest uploads.',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: 'WanderingSouL$',
          profileImageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636980906/rachel-mcdermott-HT4_9PrlwVg-unsplash_ictbci.jpg',
          bio: 'Thanks for stopping by. Hope you enjoy my latest uploads.',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Users', {
      username: {[Op.in]: ['Demo-user', 'Hipzter21', 'KingRap$']}
    }, {});
  }
};
