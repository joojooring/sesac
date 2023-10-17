const express = require("express");
const app = express();
const PORT = 8000;



app.set("view engine", "ejs");


// req.body를 해석하기 위한 코드(미들웨어)
app.use(express.urlencoded({ extended: true }));
//x-www-form-urlencoded 형태로 전송된 데이터를 해석
//extended : true일 경우 qs 모듈(외부모듈)을 이용한다. 
//           false일 경우, 내장모듈인 queryString 모듈을 사용한다.
// 
app.use(express.json());
//application/json 형태의 데이터를 해석


// localhost : 8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function (req, res) {
    res.render("index");

});

//기본주소는 localhost:8000/get
// get요청을 받는건 req.query
// 데이터 전송 시에 form태그를 이용할 경우, method를 get으로 해놓으면 get요청이 됨
// 클라이언트가 get 요청으로 데이터를 보낼 때 URL에 직접 query를 만들어서 전송이 가능(url에 전송되는데이터가 노출됨)
// 개인정보같은건 노출되니까 get으로 하면 안됨
// read 정보조회시 get요청


app.get("/get", function (req, res) {
    console.log(req.query); //{id: "lily", pw: "1234"}
    console.log(req.query.id);//"lily"
    //req.query : get 요청에 대해 client가 보낸 데이터를 담고 있음
    //query는 url에서 기본 주소 뒤에 오는 ?id=joojoo&pw=1234 이런 주소
    // ?id=lily&pw=1234

    res.send("get요청 성공!")

});

// app.get("/get", function (req, res) {
//     console.log(req.query);
//     console.log(req.query.id);
//     console.log(req.query.pw);
//     console.log(req.query.name);
//     console.log(req.query.email);


//     res.send("회원가입 요청 성공!")
// })

//localhost : 8000/post 로 post요청을 받기 위한 준비.

//CRUD(Creat, read, update, delete) 조회, 데이터 저장(db에 데이터 삽입), 원래 있던 데이터를 변경하기 위해, 데이터 삭제
// get요청은 보통 정보를 가져오거나 검색할때 사용!
// ex) 오늘 날짜 이후에 대한 정보를 가져오거나~~
// post요청은 생성하거나 정보 보낼 때 전송
// body에 실어서 전송 (req.body)
// post 요청은 url로 직접 요청하는건 불가능
// post 정보가 숨겨짐 (url에 노출되지 않음)_데이터를 새로 생성할 때 자주 사용 create

app.post("/post", function(req,res){
    console.log(req.body);
    res.send("post전송 성공")
})


app.post("/post/ver2", function(req,res){
    console.log(req.body);
    res.render("result",{
        name: req.body.name ,
        email: req.body.email
        
    })
});


app.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);

});