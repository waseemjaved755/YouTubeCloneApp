const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class WatchVideo extends Model {}

WatchVideo.init(
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
    modelName: "WatchVideo",
  }
);

module.exports = WatchVideo;
