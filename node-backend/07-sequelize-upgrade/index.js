const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/static", express.static(__dirname + "/static"))


// mvc
// router, controller, model, view
// 1. 라우터 분리 (어떤 요청이 존재하는지 정의) -> 라우터 가서 완료
// 2. controller 분리( 요청에 대해 데어터 처리, view render 한다던지.., 최종적으로 client에 응답!!)
// 3. model 분리 (db에 접근하여 데이터를 select,insert,update, delete)
// const router = require("./")


const router = require("./routes")
app.use("/",router);

app.get("*", function(req,res){
    res.send("접근할 수 없는 사이트입니다.")
});


app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});