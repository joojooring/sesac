const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function (req, res) {
    res.render("index");

});
app.get("/get", function (req, res) {
    res.send("get요청 성공!")

});

app.post("/post", function(req,res){
    console.log(req.body);
    res.send("post전송 성공")
})


app.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);
});