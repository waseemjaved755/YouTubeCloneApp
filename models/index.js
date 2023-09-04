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

//Junction Table.1 [PlaylistVideos]
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

//Junction Table.2 [History]
// 1:M User <--> History
// 1:M Video <-->History
 //Created History and using userID and VideoID there (M:M)

 User.hasMany(History, { foreignKey: "cartId" });
History.belongsTo(User, {
  foreignKey: { name: "playlistId", allowNull: false },
});
Video.hasMany(History, { foreignKey: "productId" });
History.belongsTo(Video, {
  foreignKey: { name: "videoId", allowNull: false },
});

//Junction Table.3 [LikeVideos]
// 1:M User <--> LikeVideos
// 1:M Video <--> LikeVideos
 //Created LikeVideos and using userID and VideoID there (M:M)

 User.hasMany(LikeVideos, { foreignKey: "cartId" });
 LikeVideos.belongsTo(User, {
  foreignKey: { name: "playlistId", allowNull: false },
});
Video.hasMany(LikeVideos, { foreignKey: "productId" });
LikeVideos.belongsTo(Video, {
  foreignKey: { name: "videoId", allowNull: false },
});


//Junction Table.4 [WatchVideos]
// 1:M User <--> WatchVideos
// 1:M Video <-->WacthVideos
 //Created WatchVideos and using userID and VideoID there (M:M)

 User.hasMany(WatchVideo, { foreignKey: "cartId" });
WatchVideo.belongsTo(User, {
  foreignKey: { name: "playlistId", allowNull: false },
});
Video.hasMany(WatchVideo, { foreignKey: "productId" });
WatchVideo.belongsTo(Video, {
  foreignKey: { name: "videoId", allowNull: false },
});



const models = { User, Video , Play, Channel, PlaylistVideos , LikeVideos, History , WatchVideo};
const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };