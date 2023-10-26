const express = require("express");
const router = express.Router();


// router 까지 바꿔주면 뒤에 함수인 controller부분을 만들어야 됨.
// 컨트롤러 파일로 가서 만들고 돌아와서 다시 넣어줘
const controller = require("../controller/Cuser")


// localhost:8000/user
router.get("/", controller.main);
  
// localhost:8000/user/login
router.post("/login", controller.login);
router.post("/mvclogin", controller.mvclogin);

module.exports = router;