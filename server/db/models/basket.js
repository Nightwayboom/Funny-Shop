'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({User,Card}) {
      this.belongsTo(User, {
        foreignKey: 'userId'
      }),
      this.belongsTo(Card, {
        foreignKey: 'cardId'
      });
    }
  }
  Basket.init({
    cardId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};