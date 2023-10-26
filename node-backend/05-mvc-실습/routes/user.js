const express = require("express");
const router = express.Router();
// 컨트롤러 임폴트 필요!
const controller = require("../controller/Cuser")


router.get("/", controller.main);
router.post("/login", controller.login);

module.exports = router;
