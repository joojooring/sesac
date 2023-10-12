const express =require('express') //express 모듈 불러오는거 import
const app =express(); //server 객체
const PORT =8000; // 포트

// 포트 1~1023까지는 정해진 기능이 있음. ex) 80 웹서버..
//3000~, 8000, 8080, 8010, 3010, 3001
//3306 : mysql에서 사용함.

//app객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs"); // 설정이름과 설정값
// app 객체의 view 폴더 설정. 기본값 : ./views (현재위치에서 뷰스)
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면 됨.
// app.set("views","./view")

//get메소드는 http메소드임 : 클라이언트가 요청할 수 있는 방법들을 정의
//get은 요청의 종류 중 하나임
//브라우저를 타고 특정 url을 누르는 순간 get 요청 발생


app.use("/static", express.static(__dirname + "/static"));
//__dirname: ~~~/01-express/static에 클라이언트가 /static 주소로 들어올 수 있다.
//app.use("/public", express.static(__dirname + "/static"));
//클라이언트가 이 주소를 public이름으로 들어올 수 있다.
//미들웨어 절대경로로 만들어주는거임!!! 그래서 ../이런식으로 안써야됨 ../이런식으로 쓰면 상대경로로 위치추적하는거임




app.get('/', function(req, res){
    //send는 값을 보냄
    res.send("hello expressssssssss"); //응답 객체 내의 send 메소드를 실행시키는 중 
});

//localhost:8000/
app.get('/test', function(req, res){
 //   res.send("<h1> what are you doing now </h1>"); //응답 객체 내의 send 메소드를 실행시키는 중 
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
});


app.get("/ejs", function(req, res){
    //render메소드의 기본 directory가 "./views/"
    res.render("index")
    // res.render("test/index")
})
//http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번째 매개변수 : request객체 (=요청객체)
// 두번째 매개변수 : response객체 (=응답객체)

// http://localhost:8000/test


//app객체안에 있는 listen 메소드를 이용해 서버를 연다.
//포트번호, 이벤트
// localhost:8000
// 127.0.0.1:8000


app.get('/lily', function(req, res){
    res.render("lily",{
        name: "lily", 
        product:["운동화","후드집업","스웨터","비키니"] });

})

app.listen(PORT, function(){
    console.log(`server open ${PORT}`);
});