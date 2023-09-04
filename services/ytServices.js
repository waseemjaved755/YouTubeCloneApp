const ytModels = require("../models/ytModels");


module.exports = 
{

    getVideo : function ()
    {
        console.log("services");  
       const response = ytModels.getVideo();
       return response;
      
    }

};