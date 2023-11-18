const express = require("express");
const app = express();
const PORT = 8005;

app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( "/assets/css", express.static( "assets/css" ) );


app.get("/", function (req, res) {
    res.render("test2");

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