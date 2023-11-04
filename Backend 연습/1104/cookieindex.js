const express = require('express')
const app = express()
const PORT = 8000
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 이 코드가 쿠키를 해석하고 사용할 수 있게 해줌


app.get("/", (req,res)=>{
    const noPopup = req.cookies.popup;

    res.render("popup", {noPopup : noPopup})
})

const cookieConfig = {
    httpOnly : true , //쿠키는 브라우저에서 생성이 되는데 기본적으로 브라우저에서 접근이 가능함 
    // -> document.cookie 로 접근하지 못하게 하려면 httpOnly를 true로!! 즉 서버에서만 쿠키에 접근할 수 있다!
    maxAge : 24 * 60 * 60 * 1000, //ms단위로 보존하고자 하는 기간을 설정 (3초 : 3000 , 30초 : 30000)
}; 

app.post("/setCookie",(req,res)=>{
    // 서버가 쿠키를 만들어서 응답으로 보냄

    res.cookie("popup", "yes", cookieConfig) //쿠키를 보내는 메소드가 아님!! 쿠키를 담는 메소드임
    res.send({result : true}); //그래서 res.send를 꼭 보내야 응답이 보내져서 쿠기가 보내짐
})

app.listen(PORT, () => {
  console.log('Server Port : ', PORT)
})
