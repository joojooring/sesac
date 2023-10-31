const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor2");

// 임시라우터
router.get("/visitor/test/:id", controller.getTest)



// ~~~~~:8000 -> index.ejs render
router.get("/", controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor", controller.patchVisitor);

// 방명록 하나 조회 primary key인 유일한 id를 이용해 조회하면 되고 그 id는 params로 받아오면 됨
router.get("/visitor/:id", controller.getVisitorById);

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);


module.exports = router;
