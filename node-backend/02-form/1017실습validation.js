const express = require("express");
const app = express();
const PORT = 8002;

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req,res){
res.render("실습valid_index")
});

app.post("/post", function(req,res){
    console.log(req.body);
    res.send("회원가입 성공")
});

app.listen(PORT, function(){
    console.log(`Server Open " ${PORT}`)
});