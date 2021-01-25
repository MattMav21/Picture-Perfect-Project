'use strict';
// const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    imageLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
  },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Picture.associate = function(models) {
    // associations can be defined here
    Picture.belongsTo(models.User, { foreignKey: 'userId' } )

  };
  return Picture;
};