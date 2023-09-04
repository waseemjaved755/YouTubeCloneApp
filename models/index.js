const { STRING } = require("sequelize");
const sequelize = require("../bin/dbConnection");

//importing models

const {
  User,
  Video,
} = require("./definitions/index");


const models = { User, Video };
const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };