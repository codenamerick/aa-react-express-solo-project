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
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524559/album-art-2_xsi88y.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519427/X-POISON_Prod._DT_Hitz_x_Nick_Mira_ptnxta.mp3',
          title: 'Juice WRLD - My X was poison',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: 2,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524558/album-art-5_i4p7tg.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519415/avage-x-No-Fatigue-Ain-t-It-Funny-Official-Audio-ytmp3.com_kawkoq.mp3',
          title: "Savage X No Fatigue Ain't It Funny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 3,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524553/album-art-6_m7adi7.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519401/Cdot_Honcho_-_Anti_Official_Audio_dknhxa.mp3',
          title: 'Cdot Honcho - Anti Official',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          albumId: 4,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524558/album-art-1_i7ida0.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519393/Old_City_Lights_-_Occasions_ovck3x.m4a',
          title: 'Old City Lights - Occasions',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          albumId: 2,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636984122/austin-neill-SLUeuL-mrRg-unsplash_ujbhwy.jpg',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636981710/Language_Mix_3_Mastered_1_zilwvk.wav',
          title: 'Language Mix 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 2,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524560/album-art-4_jafmoz.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636981692/08_Juvenile_Eyes_kzcatv.m4a',
          title: 'Juvenile Eyes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: 2,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524553/album-art-3_n9sg5u.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636981690/POLAR_1_desjub.mp3',
          title: 'POLAR',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          albumId: 1,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636984121/khamkeo-vilaysing-WtwSsqwYlA0-unsplash_mhgq66.jpg',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636981686/13715649791014761_song_1_wephil.mp3',
          title: 'In The Wind',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          albumId: 1,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524554/album-art-8_yu29kt.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519307/300Clay_-_Fool_d_ya_fast_2_fyepn6.mp3',
          title: 'Fool d ya fast 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 3,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636984122/chris-ainsworth-7WfcHibcR3Y-unsplash_ymeeaq.jpg',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519346/Language_Mix_3_Mastered_tg6zlh.wav',
          title: 'Language Mix 3 Mastered',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: 3,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636984121/cristian-palmer-XexawgzYOBc-unsplash_ocwaf1.jpg',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519362/13715649791014761_song_t96de9.mp3',
          title: 'Random',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: 4,
          imageUrl: 'https://res.cloudinary.com/dedpxzbak/image/upload/v1636524555/album-art-7_hh42am.png',
          songUrl: 'https://res.cloudinary.com/dedpxzbak/video/upload/v1636519384/FREE_Travis_Scott_x_Lil_Pump_Type_Beat_2018_-_Laced_Up_wvnqi1.mp3',
          title: 'Laced Up',
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
