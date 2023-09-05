const userService = require("../services/userServices");
const joi = require("joi");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");


const createUserSchema = joi.object({
  fname: joi.string().required().min(3).max(35),
  lname: joi.string().required().min(3).max(35),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const getUserByEmail = joi.object({
    email: joi.string().email().required(),
  });

module.exports = {
  createUser: async function (req, res) {
    try {
        console.log("try controller");
      const validate = await createUserSchema.validateAsync(req.body);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await userService.createUser(validate);
      console.log("try controller aft validation");
      res.status(StatusCodes.OK).send({
        data: { response },
        message: ReasonPhrases.OK,
        error: {},
      });

      console.log(response
        );

    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
    }
  },

  getUserByEmail: async function (req, res) {
    try {
      const validate = await getUserByEmail.validateAsync(req.query);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await userService.getUserByEmail(validate.email);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: ReasonPhrases.OK,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
    }
  },
};