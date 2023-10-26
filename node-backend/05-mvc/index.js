const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [before]
// 라우터폴더// app.get("/",

// 컨트롤러폴더 : function(req,res){
    // res.render("10.26index")
// })


// const router = require("./routes/index")
//index.js를 불러오고 싶다면 폴더이름까지만 접근해도 자동으로 index.js불러옴
const router = require("./routes") 
app.use("/", router);
// localhost : 8000/~~~~~슬래쉬 뒤의 오는 모든 건 router 객체에 들어가게 됨

//만약 localhost:8000/user /~~~~~
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// 존재하지 않는 get 요청에 대해서 클라이언트가 잘못 입력하면 나올 수 있게끔 
// * 어떤 라우터든 간에란 뜻
app.get("*", function(req,res){
    res.send("페이지를 찾을 수 없습니다.");
})


app.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);
});
