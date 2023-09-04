const ytModels = require("../models/ytModels");


module.exports = 
{

    getVideo : function ()
    {
       
       const response = ytModels.getVideo();
       return response;
      
    }

};