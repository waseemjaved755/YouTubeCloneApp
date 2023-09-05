const router = require("express").Router();
//const middleware = require("../middleware");
const userController = require("../controllers/userController");
const middleware = require("../middleware");

console.log("router");

router.post("/createUser", userController.createUser);
router.get("/getUserByEmail", 
middleware.authenticateJWT,
userController.getUserByEmail);

console.log("router");
module.exports = router;