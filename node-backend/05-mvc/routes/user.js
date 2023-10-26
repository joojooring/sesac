const express = require("express") ;
const router = express.Router();
// const controller = require("../controller/Cmain")

// 요청에 대한 정보를 모아둠

// localhost : 8000/user
router.get("/",controller.main);



module.exports =router;
