const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

router.get("/signup", controller.signup);

router.post("/signup", controller.postSignup);

router.get("/login", controller.getLogin)

router.post("/login" , controller.postLogin);

// router.post("/login/:id" , controller.login);

// router.post("/user/login", controller.postLogin);

router.get("/profile", controller.getProfile);
router.post("/profile", controller.postProfile);

router.patch("/profile/edit/:id", controller.patchEdit);

router.delete("/profile/delete/:id", controller.profileDelete);

module.exports = router;
