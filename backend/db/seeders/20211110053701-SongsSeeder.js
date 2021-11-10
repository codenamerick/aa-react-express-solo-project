'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Songs', [
        {
          userId: 1,
          albumId: 1,
          url: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519427/X-POISON_Prod._DT_Hitz_x_Nick_Mira_ptnxta.mp3',
          title: 'Juice WRLD - My X was poison',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: 2,
          url: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519415/avage-x-No-Fatigue-Ain-t-It-Funny-Official-Audio-ytmp3.com_kawkoq.mp3',
          title: "Savage X No Fatigue Ain't It Funny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 3,
          url: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519401/Cdot_Honcho_-_Anti_Official_Audio_dknhxa.mp3',
          title: 'Cdot Honcho - Anti Official',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          albumId: 4,
          url: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519393/Old_City_Lights_-_Occasions_ovck3x.m4a',
          title: 'Old City Lights - Occasions',
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
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
