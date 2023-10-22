const express = require("express");
const multer = require("multer");
const path = require("path"); 
// path : 파일 경로를 받았을 때 , 그 조작을 도와줌 (ex) 확장자 추출, 파일이름 추출...
console.log("hi.txt의 확장자:", path.extname("hi.txt"));
console.log("hi.txt의 이름:", path.basename("hi.txt", path.extname("hi.txt")));


const app = express();
const PORT = 8010;

// 클라이언트가 uploads 폴더에 저장한 이미지 파일로 접근할 수 있도록 미들웨어 작성필요
// dirname : 절대경로로 접근시켜줌

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(__dirname+ "/uploads"));


//upload라는 객체 안에는 미들웨어 함수가 존재. single() , array() , fields() ...
// 미들웨어 : 요청과 응답 사이에 존재
//  파일을 multer의 설정대로 저장해서, 그 문자열을 파일이름으로 만들어줌(확장자도 고쳐주지 않음)
//req.file or req.files이라는 객체를 만들어줌

const upload = multer({
    //destination목적지 파일이 저장될 기본위치
    dest: "uploads/",
})


const uploadDetail = multer({

    // diskStorage()는 disk에 저장소를 만들어줌
    storage: multer.diskStorage({
        destination : function(req, file, done){
            //done이라는 콜백함수를 이용해서 뒤에 경로를 지정해줌!
            done(null, "uploads/")
        },
        filename : function(req,file,done){
            console.log(file); //file.originalname이 엘리멘탈.jpeg일때
            // path.extname() 확장자를 추출하는 함수
            const ext = path.extname(file.originalname); //.jpeg
            const basename = path.basename(file.originalname, ext) // 엘리멘탈

            //엘리멘탈_12345678.jpeg
            const fileName = basename +"_" +Date.now() +ext //엘리멘탈_12345678.jpeg

            done(null, fileName) 
        }
    }),
    limits : {fileSize: 5*1024*1024 }, //파일크기 5MB 제한
})

// Multer 안에 storage(파일을 저장할 정보)와 limits이 들어오고
// storage안에 diskStorage(파일을 디스크에 저장하기 위한 기능을 제공하는 메소드)가 오고 
// 그 안에 destination(파일이 저장될 경로)과 filename(파일이 저장될 이름)
// limits 안에 fileSize(파일의 최대 크기)가 옴



app.get("/", function (req, res) {
  res.render("1021index");
});

//single() : 미들웨어. => 클라이언트가 보낸 요청 중 filename을 가지고 있는 파일데이터가 있다면,
// 파일을 multer의 설정대로 저장해서, req.file이라는 객체를 생성해서 다음 함수에 넘겨줌
app.post("/upload",upload.single("userfile"), function(req, res){
    console.log("file : ", req.file);
    console.log("body : ", req.body);
    res.send("파일 업로드 완료")
});

//single():파일 하나만 업로드할 때 사용함
app.post("/upload/detail",uploadDetail.single("userfile") ,function(req, res){
    console.log("file detail : ", req.file);
    console.log("body detail : ", req.body);
    res.render("result",{
        src: req.file.path,
        title : req.body.title
    });

})

//array(): 하나의 input(name인풋 하나로) 으로 파일을 여러개 받겠다
// req.files 생성
app.post("/upload/array",uploadDetail.array("userfile") ,function(req, res){
    console.log("file 여러개(ver1) : ", req.files );

    res.send("파일 여러개 업로드 성공");

})

// fields() : 파일 여러개 업로드를 하는데 여러개의 input을 사용할때 (name이 두개 이상)
// fields([{}]) 안에 배열로 적음 [{}]
app.post("/upload/fields",uploadDetail.fields([{name : "userfile1"}, {name : "userfile2"}]) ,function(req, res){
    console.log("file 여러개(ver2) : ", req.files );
    console.log(req.body);

    res.send("파일 여러개 업로드 성공ver2");

})



app.post("/upload/dynamic",uploadDetail.single("userfile1"),function(req,res){
    console.log(req.file)
    console.log(req.body)
    res.send({src : req.file.path});

})
app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});