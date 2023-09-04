const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class PlaylistVideos extends Model {}

PlaylistVideos.init(
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
    modelName: "PlaylistVideos",
  }
);

module.exports = PlaylistVideos;
