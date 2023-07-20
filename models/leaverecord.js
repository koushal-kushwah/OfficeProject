'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveRecord extends Model {
    static associate(models) {
      LeaveRecord.belongsTo(models.Employee,{
        foreignKey : "emp_id",
        as : "employee"
      })
      LeaveRecord.belongsTo(models.Employee,{
        foreignKey : "leave_req_id",
        as : "request"
      })
      LeaveRecord.belongsTo(models.Employee,{
        foreignKey : "approve_by",
        as : "approveBy"
      })
    }
  }
  LeaveRecord.init({
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
    approve_date:{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'LeaveRecord',
    tableName:"leave_record"
  });
  return LeaveRecord;
};