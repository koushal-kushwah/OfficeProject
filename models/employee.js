'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.belongsTo(models.Employee,{
        foreignKey : "created_by",
        as : "createdBy"
      })
    }
  }
  Employee.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Employee Name can't be empty !"},
        notNull : {msg : "Employee Name can't be null !"}
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull: false,
      unique : true,
      validate:{
        notEmpty : {msg : "Phone Number can't be empty !"},
        notNull : {msg : "Phone Number can't be null !"},
        len : {
          args : [10,10],
          msg : "Wrong Phone Number Format !"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique : true,
      validate:{
        notEmpty : {msg : "Email can't be empty !"},
        notNull : {msg : "Email can't be null !"},
        isEmail : {msg : "Wrong Email Format !"}
      }
    },
    type: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Employee type can't be empty !"},
        notNull : {msg : "Employee type can't be null !"}
      }
    },
    joining_date:{
      type : DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Joining Date can't be empty !"},
        notNull : {msg : "Joining Date can't be null !"}
      }
    },
    image:  {
      type : DataTypes.STRING,
      allowNull: true,
      validate:{
        notEmpty : {msg : "Image can't be empty !"},

      }
    },
    active_status: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'employees'
  });
  return Employee;
};