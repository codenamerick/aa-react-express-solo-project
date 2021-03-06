'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    albumId: {
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    songUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.hasMany(models.Comment, {foreignKey: 'songId', onDelete: 'CASCADE', hooks: true});
    Song.belongsTo(models.User, {foreignKey: 'userId'});
    Song.belongsTo(models.Album, {foreignKey: 'albumId'});
  };
  return Song;
};
