const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser")

router.get("/", controller.home) ;
// router.get("/user",controller.user);
router.post("/user/register", controller.register);
// router.post("/user/login", controller.login);

module.exports = router;