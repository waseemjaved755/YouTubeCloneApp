const { models } = require("../models/index");
module.exports = {
    createUser: async function (body) {
      try {
        return await models.User.create(body);
      } catch (error) {
        return error;
      }
    }
}