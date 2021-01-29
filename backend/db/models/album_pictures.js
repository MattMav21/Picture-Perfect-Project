'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album_Pictures = sequelize.define('Album_Pictures', {
    albumId: DataTypes.INTEGER,
    pictureId: DataTypes.INTEGER
  }, {});
  Album_Pictures.associate = function(models) {
    // associations can be defined here
  };
  return Album_Pictures;
};