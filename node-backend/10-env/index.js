const express = require("express");
const path = require("path")
const app = express();
const PORT = 8000;

const dotenv = require("dotenv");
// cross-env 패키지 사용시 배포하는 환경에 따라(실행시키는 환경에 따라)다른버전으로
// 배포버전이냐? 개발버전이냐?에 따라 다른 env파일을 로드할 수 있게끔 도와줌

console.log(process.env);

dotenv.config(); //index.js와 같은 위치에 있는 .env파일을 불러와서 환경변수로 사용할 수 있게끔함
dotenv.config()

dotenv.config({path : path.join(__dirname, "./config/envs/.env")});
dotenv.config({path : path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`)})
// console.log("TEST VAR : ",process.env.TEST_VAR);

console.log("TEST VAR : ",process.env.PASSWORD);

app.get('/', (req,res) =>{
    res.send("환경변수 뭐니?");
});

app.listen(process.env.PORT, function () {
    console.log(`Sever Open: ${process.env.PORT}`);
  });