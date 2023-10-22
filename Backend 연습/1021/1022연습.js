const express = require("express");
const multer = require("multer");
const path = require("path"); 


const app = express();
const PORT = 8012;


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(__dirname+ "/uploads"));


const upload = multer({
    dest: "uploads/",
})


const uploadDetail = multer({
    storage: multer.diskStorage({
        destination : function(req, file, done){
            done(null, "uploads/")
        },
        filename : function(req,file,done){
            // console.log(file); //file.originalname이 엘리멘탈.jpeg일때
            const ext = path.extname(file.originalname); //.jpeg
            const basename = path.basename(file.originalname, ext) // 엘리멘탈
            const fileName = basename +"_" +Date.now() +ext //엘리멘탈_12345678.jpeg
            done(null, fileName) 
        }
    }),
    limits : {fileSize: 5*1024*1024 }, //파일크기 5MB 제한
})

app.get("/", function (req, res) {
  res.render("1022연습");
});



app.post(
    "/upload/dynamic",
    uploadDetail.single("userfile"),
    function (req, res) {
      res.send({ 
        src: req.file.path},);
    }
  );
  


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });