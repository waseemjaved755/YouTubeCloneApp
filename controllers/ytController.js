const ytServices = require("../services/ytServices");

module.exports = {


    getVideo: function (req, res) {
        console.log("controller");
        const response = ytServices.getVideo();
        res.send(response);
      }


};