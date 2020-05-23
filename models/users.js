'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    totalCorrect: DataTypes.INTEGER,
    totalWrong: DataTypes.INTEGER,
    average: DataTypes.DOUBLE
  }, {timestamps: false});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};