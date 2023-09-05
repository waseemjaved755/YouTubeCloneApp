const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
module.exports = {
    createUser: async function (body) {
      try {
        console.log("services");
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);
        const response = await userModel.createUser(body);
        console.log("after services");

        if (response) {
          delete response.dataValues.password;
          return response;
        }
        return "user not created";
      } catch (error) {
        return error;
}
    }
};