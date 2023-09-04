const ytServices = require("../services/ytServices");

module.exports = {


    getVideo: function (req, res) {
        const response = ytServices.getVideo();
        res.send(response);
      }


};