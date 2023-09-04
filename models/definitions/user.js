const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "User",
  }
);

module.exports = User;
