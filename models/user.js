'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Employee,{
        foreignKey : "emp_id",
        as : "employee"
      })
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    status: {
      type:DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : true
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName:"users"
  });
  return User;
};