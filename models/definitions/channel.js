const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Channel extends Model {}

Channel.init(
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
    modelName: "Channel",
  }
);

module.exports = Channel;
