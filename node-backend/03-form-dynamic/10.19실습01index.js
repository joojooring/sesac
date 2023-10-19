const express = require("express");
const app = express();
const PORT = 8006;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.render("1019실습01");

});

app.get("/axios", function (req, res) {
    console.log(req.query);
    const data ={
        ...req.query,
        msg : "방가방가"
    }
 

    res.send(data);

});

app.post("/axios", function (req, res) {
    console.log(req.body);
    if ((req.body.id =="joojooring") && (req.body.pw=="12345678")){
        result="로그인 성공! "
    } else{
        result="로그인 실패ㅠㅠ"
    }
    
    const data = {
        ...req.body,
        result: result
    }
    res.send(data);
    
});

// app.post("/~", function(req,res){
//     const id ="lily"
//     const pw ="1234"
    // req.body와 id , pw를 비교하는 코드 작성
    // 일치하지 않으면 -> 로그인 실패
    // 일치 -> 로그인 성공o
// })

app.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);
});

