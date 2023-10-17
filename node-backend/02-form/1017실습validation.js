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
    res.render("result",{
        id: req.body.id ,
        pw: req.body.pw,
        phonenumber: req.body.phonenumber ,
        name: req.body.name,
        gender: req.body.gender

    })
});

app.listen(PORT, function(){
    console.log(`Server Open " ${PORT}`)
});