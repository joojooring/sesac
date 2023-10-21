const express = require("express");
const multer =require("multer");
const app = express();
const PORT = 8008;

//upload라는 객체 안에는 미들웨어 함수가 존재. single() , array() , fields() ...
// 미들웨어 : 요청과 응답 사이에 존재
// multer가 임의의 문자열을 생성해서 그 문자열을 파일이름으로 만들어줌(확장자도 고쳐주지 않음)

// multer라는 함수는 매개변수를 객체로 받음 function test(object){}
// 그래서 ({})안에 객체를 넣어주면 됨 test({name: "joojooring"})같은


// 클라이언트가 uploads 폴더에 저장한 이미지 파일로 접근할 수 있도록 미들웨어 작성필요

const upload = multer({
    dest : "uploads/"
})

const uploadDetail = multer({
    // diskStorage는 disk에 저장소를 만들어줌
    storage : multer.diskStorage({
        destination: function(req, file, done){
            // done이라는 콜백함수를 이용해서 뒤에 경로를 지정해줌
            done(null, "uploads")
        },
        filename : function(req, file, done){
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext)
            const fileName = basename +"_"+Date.now()+ext
            
            done(null, fileName)
        }
        
    }),
    limits : {fileSize : 5 * 1024 * 1024};
})

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname+"/uploads"))


app.get("/", function (req, res) {
  res.render("연습");
});

// single() : 미들ㄹ웨어, 클라이언ㄴ트가 보낸 요청 중 filename을 가지고 있는 파일데이터가 있다면
// 파일을 multer의 설정대로 저장해서 req.file이라는 객체를 생성해서 다음 함수에 넘겨줌
app. post("/upload", upload.single("userfile") ,function(req, res){
    res.send("파일 업로드 완료")
})

app.post("/upload/detail",uploadDetail.single("userfile"),function(req,res){
    res.render("result",{
        src: req.file.path,
        title: req.body.title
            })
})


// array() 하나의 input에서 파일 여러개 받을때
app.post("/upload/array",uploadDetail.array("userfile"),function(req,res){
 res.send("파일 여러개 업로드 성공")
})

// fields() 파일 여러개 업로드 하는데 여러개의 input 사용시 (name 두개 이상0)
// fields([{}]) 안에 배열로 적음
app.post("/upload/fields",uploadDetail.fields([{name : "userfile1"},{name : "userfile2"}]),function(req,res){
res.send("파일 여러개 업로드 성공ver2")
})

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});