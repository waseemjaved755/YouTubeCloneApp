const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Video extends Model {}

Video.init(
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
    modelName: "Video",
  }
);

module.exports = Video;
