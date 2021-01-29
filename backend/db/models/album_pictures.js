'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album_Pictures = sequelize.define('Album_Pictures', {
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pictureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Album_Pictures.associate = function(models) {
    // associations can be defined here
    Album_Pictures.belongsTo(models.Album, { foreignKey: 'albumId' })
    Album_Pictures.belongsTo(models.Picture, { foreignKey: 'pictureId' })
  };
  return Album_Pictures;
};