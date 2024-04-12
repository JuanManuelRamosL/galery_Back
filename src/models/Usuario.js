const { DataTypes } = require('sequelize');
const sequelize = require('../BD');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  favorites: {
    type: DataTypes.ARRAY(DataTypes.STRING), // recibir solo strings sino es muy pesado 
    defaultValue: [] 
  },
  image: {
    type: DataTypes.STRING,
  },
});

module.exports = User;