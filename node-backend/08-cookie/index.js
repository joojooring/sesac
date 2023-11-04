const express = require('express')
const app = express()
const PORT = 8000
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 이 코드가 쿠키를 해석하고 사용할 수 있게 해줌


app.get("/", (req,res)=>{
    res.render("index")
})

const cookieConfig = {
    httpOnly : true , //쿠키는 브라우저에서 생성이 되는데 기본적으로 브라우저에서 접근이 가능함 
    // -> document.cookie 로 접근하지 못하게 하려면 httpOnly를 true로!! 즉 서버에서만 쿠키에 접근할 수 있다!
    maxAge : 30000, //24 * 60 * 60 * 1000, //ms단위로 보존하고자 하는 기간을 설정 (3초 : 3000 , 30초 : 30000)
    // expires : "2023-11-05T18:00",
    // path : "/", // "/test" -> localhost : 8000에선 쿠키가 존재하지 않고 / localhost:8000/test에서 쿠키가 존재하게 됨
    // secure : true, // https 이 보안이 설정된 서버에서만 쿠키를 동작하게 한다.
    // signed : true // 쿠키 암호화 ->     req.signedCookies
}; // 언제 만료가 될건지에 대해 설정

app.get("/set",(req,res)=>{
    // 서버가 쿠키를 만들어서 응답으로 보냄
    // key : key1, value : value1
    res.cookie("key1", "value1", cookieConfig);
    res.cookie("popup", "1", cookieConfig);

    // 클라이언트가 받는 응답을 하려면 res.send나 res.render하면 됨
    res.send("set cookiecookie!!");
})

app.get("/get",(req,res)=>{
    console.log("cookie : ", req.cookies.key1)
    res.send(req.cookies);

    // req.signedCookies
})


app.listen(PORT, () => {
  console.log('Server Port : ', PORT)
})
