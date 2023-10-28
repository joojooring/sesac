const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor")

// ~:8000 : 
router.get("/", controller.home) ;

// ~:8000/visitor :
router.get("/visitors", controller.visitor);

//방명록 등록
router.post("/visitor", controller.postVisitor);


// 방명록 수정
// router.patch("/visitor/:id", controller.patchVisitor);

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;