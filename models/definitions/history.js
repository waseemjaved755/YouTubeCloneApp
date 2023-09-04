const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class History extends Model {}

History.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "History",
  }
);

module.exports = History;
