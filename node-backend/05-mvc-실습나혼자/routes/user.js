// router엔 url 담는거
// app 객체 대신 router 객체로 변경해줘야 됨
//  그래서 router라는 객체를 먼저 만들고

const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser")

router.get("/", controller.main);

router.post("/login",controller.login);

module.exports =router;
