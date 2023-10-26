const express = require("express");
const router = express.Router();

// controller파일에 있던거 가져와야되니까 임폴트해주기
const controller = require("../controller/Cuser")

router.get("/", controller.main);
router.post("/login", controller.login);

module.exports = router;

// const express = require("express");
// const router = express.Router();


// router.get("/", function (req, res) {
//     res.render("user");
//   });
  
  
// router.post("/login", function (req, res) {
//     const id = "lily";
//     const pw = "12345";
//     let data;
//     if (req.body.userid == id && req.body.password == pw) {
//       data = {
//         isSuccess: true,
//         msg: "로그인 성공!",
//       };
//     } else {
//       data = {
//         isSuccess: false,
//         msg: "로그인 실패!",
//       };
//     }
//     // console.log(req.body);
//     res.send(data);
//   });
  
  