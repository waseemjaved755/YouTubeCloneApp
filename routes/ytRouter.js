const router = require("express").Router();
const ytController = require("../controllers/ytController");

router.get("/getVideo" , ytController.getVideo);



module.exports = router;