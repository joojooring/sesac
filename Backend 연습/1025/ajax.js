const express = require("express") ; // express 모듈 가져오기


const app = express() ; // express 앱 생성
const PORT = 3000 ;

app.set("view engine", "ejs") //HTML을 읽을 수 있게, JAVASCRIPT에 사용한 HTML (.ejs) 확장자를 가진 파일을 res.render에 접목시켜야됨
app.use(express.json()); //body에 포함된 json데이터를 해석하고 JS객체로 변환, JSON형식으로 전송된 요청 데이터를 파싱해서 req.body객체에 저장
app.use(express.urlencoded({extended : true})); //form 데이터 해석

app.get ("/", function(req,res){
    res.render("ajax");
});

app.get ("/ajax", function(req,res){
    res.send(req.query) ;
})
app.post ("/ajax", function(req,res){
    res.send(req.body);
})
// 

app.get("/axios", function(req,res){
    res.send(req.query);
})
app.listen(PORT, function(){
    console.log(`Server Open : ${PORT}`);
})

