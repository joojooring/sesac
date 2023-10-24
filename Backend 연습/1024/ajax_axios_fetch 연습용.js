const express = require("express");
const app = express();
const PORT = 8005;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    // res.render("axiosindex");
    res.render("ajax_axio완성코드")
});
app.get("/ajax", function (req, res) {
    console.log(req.query);
    // { key : value, key : value };
    res.send(req.query);

});

app.post("/ajax", function (req, res) {
    console.log(req.body);
    // { key : value, key : value };
    res.send(req.body);

});

app.get("/axios", function (req, res) {
    console.log(req.query);
    // { key : value, key : value };
    res.send(req.query);

});

app.post("/axios", function (req, res) {
    console.log(req.body);
    const data ={
        ...req.body,
        msg : "방가방가"
    }
    res.send(data);

});


app.get("/fetch", function (req, res) {
    console.log(req.query);
    res.send(req.query);

});

app.post("/fetch", function (req, res) {
    console.log(req.body);
    const data ={
        ...req.body,
        msg : "방가방가"
    }
    res.send(data);

});




app.post("/fetch", function(req,res){
    console.log(req.body);
    res.send("fetch post전송 성공")
})

app.post("/~", function(req,res){
    const id ="lily"
    const pw ="1234"
    // req.body와 id , pw를 비교하는 코드 작성
    // 일치하지 않으면 -> 로그인 실패
    // 일치 -> 로그인 성공o
})

app.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);
});

