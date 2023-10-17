const express = require("express");
const app = express();
const PORT = 8001;


app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req,res){
    res.render("실습index.ejs");
})

app.post("/post", function(req,res){
    const data = req.query
    function Checkform(){
        if(frm.name.id.value == ""){

            frm.name.focus();
            alert("이름을 입력해주세요!")
            return false;
        }

    }
    console.log(req.body);
    res.render("result",{
        name: req.body.name ,
        email: req.body.email
    })
    // console.log(req.query.id);
    // console.log(req.query.gender);
    // console.log(`${data.year}-${data.month}-${data.day}`);
    // console.log(req.query.interst);

    // res.send("회원가입 성공")
})



app.listen(PORT, function(){
    console.log(`Server Open: ${PORT}`);
});