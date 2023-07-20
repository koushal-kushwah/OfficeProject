'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveRequest extends Model {
    static associate(models) {
      LeaveRequest.belongsTo(models.Employee,{
        foreignKey : "emp_id",
        as : "employee"
      })
    }
  }
  LeaveRequest.init({
    description:{
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Description  can't be empty !"},
        notNull : {msg : "Description  can't be null !"}
      }
    },
    days:{
      type : DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Days  can't be empty !"},
        notNull : {msg : "Days  can't be null !"},
        isNumeric:{msg : "Days Always be numeric"}
      }
    },
    start_date: {
      type : DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Start date  can't be empty !"},
        notNull : {msg : "Start date  can't be null !"}
      }
    },
    request_date: {
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue: new Date()
    },
    leave_type: {
      type : DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : "Leave type can't be empty !"},
        notNull : {msg : "Leave type can't be null !"}
      }
    },
    leave_status: {
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending"
    },
  }, {
    sequelize,
    modelName: 'LeaveRequest',
    tableName: 'leave_request'
  });
  return LeaveRequest;
};