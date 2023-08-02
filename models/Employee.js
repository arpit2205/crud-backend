const { sequelize } = require("../sqlconfig");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define(
  "Employee",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, Infinity],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, Infinity],
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Male", "Female", "Other"]],
      },
    },
    department: { type: DataTypes.STRING, allowNull: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Employees",
    timestamps: true,
  }
);

// create table
sequelize
  .sync()
  .then(() => console.log("All models were synced successfully."))
  .catch((err) => console.log("Error syncing database models", err));

module.exports = { Employee };
