const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Play extends Model {}

Play.init(
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
    modelName: "Playlist",
  }
);

module.exports = Play;
