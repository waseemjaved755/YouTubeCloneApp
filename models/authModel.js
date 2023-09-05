const { models } = require("./index");

module.exports = {
  login: async (email) => {
    try {
        console.log("Auth Model");
      return await models.User.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  },
};
