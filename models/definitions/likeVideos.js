const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class LikeVideos extends Model {}

LikeVideos.init(
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
    modelName: "LikeVideos",
  }
);

module.exports = LikeVideos;
