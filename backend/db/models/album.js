'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Album;
};