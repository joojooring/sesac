const express = require("express");
const multer =require("multer");
const app = express();
const PORT = 8012;
const path = require("path"); 


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
            const username = req.body.id
            // const basename = path.basename(file.originalname, ext)
            const fileName = username +"_"+Date.now()+ext
            
            done(null, fileName)
        }
        
    }),
    limits : {fileSize : 5 * 1024 * 1024}
})

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname+"/uploads"))


app.get("/", function (req, res) {
  res.render("1021실습22동적");
});

app. post("/upload", upload.single("userfile") ,function(req, res){
    
    const data ={
        ...req.body
    }
    res.send(data.id+"님 환영합니다.");
})


app.post("/upload/single",uploadDetail.single("userfile") ,function(req, res){
    console.log("파일정보 :", req.file );
    // const data ={
    //     ...req.body
    // }
    res.render("1021실습22동적result",{
        src: req.file.path,
        ...req.body
        // id: data.id +"님 환영합니다.", -> 이런건 html 파일에 ejs 함수를 써서 첨부해야됨
        // pw: data.pw,
        // name: data.name,
        // age: data.age


    })

})


app.post("/upload/dynamic",uploadDetail.single("userfile"),function(req,res){
    console.log(req.file)
    console.log(req.body)

    const responseData = {
        src : req.file.path,
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name,
        age : req.body.age
    }

    res.send(responseData);

})

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});