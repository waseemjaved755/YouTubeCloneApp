const { STRING } = require("sequelize");
const sequelize = require("../bin/dbConnection");

//importing models

const {
  User,
  Video,
  Play,
  Channel,
  PlaylistVideos,
  LikeVideos,
  History,
  WatchVideo
} = require("./definitions/index");

//Relations 

//1:1 User <----> Channel
User.hasOne(Channel , { foreignKey : "userID"} );
Channel.belongsTo(User , {

    foreignKey : {name : "userID" , allowNull : false},
});

//1:M User <-----> Playlist
User.hasMany(Play, { foreignKey: "userId" });
Play.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
});

//Junction Table [PlaylistVideos]
// 1:M Playlist <--> PlaylistVideos
// 1:M Video <--> PlayListVideos
 //Created PlayListVideos and using PlaylistID and VideoID there (M:M)

 Play.hasMany(PlaylistVideos, { foreignKey: "cartId" });
PlaylistVideos.belongsTo(Play, {
  foreignKey: { name: "playlistId", allowNull: false },
});
Video.hasMany(PlaylistVideos, { foreignKey: "productId" });
PlaylistVideos.belongsTo(Video, {
  foreignKey: { name: "videoId", allowNull: false },
});




const models = { User, Video , Play, Channel, PlaylistVideos , LikeVideos, History , WatchVideo};
const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };