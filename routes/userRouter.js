const router = require("express").Router();
//const middleware = require("../middleware");
const userController = require("../controllers/userController");

console.log("router");

router.post("/createUser", userController.createUser);
console.log("router");
module.exports = router;