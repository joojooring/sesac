const express = require('express')
const app = express()
const PORT = 8000
const session = require("express-session");

// 세션 :  브라우저가 종료될 때까지 가지고 있겠다
app.use(session({
    secret: "scretekey",
    resave :false, // 모든 요청마다 세션을 다시 저장할거냐에대한 의미
    saveUninitialized: true, // 클라이언트가 서버에 처음 접속했을때, 기본적으로 세션의 공간자체를 초기화할거냐에 대한 의미 
    cookie : {
        httpOnly : true, //document.cookie로는 접근못하게!
        maxAge : 30000//10 * 60 * 1000
    }, //쿠키에서 시간제한을 둘 수 있음
    secure : false // true면 https 보안서버에서만 동작하도록 함

}))


app.get("/", (req,res)=>{
    res.send("session hello world!!")
})

app.get("/logout", (req,res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;

        res.send({result : true, message: "로그인 성공"})
    })
})

app.get("/set", (req,res)=>{
    console.log("1 :", req.session)
    // 로그인 성공한 시점에 req.session.user에 user를 식별할 수 있는 고유값을 넣고 
    req.session.user = {
        name: "lily",
        email: "ghkdwnfl0557@naver.com"
}
    console.log("2 :", req.session)
    res.send("session setting")
})

app.get("/get", (req,res)=>{
    // req.session.user이 존재하는지 안하는지부터 검사
    // if(req.session.user){
    //     res.render("profile", {})
    // }else{
    //     res.redirect("/login")
    // }
    console.log("user : ", req.session.user)
    res.send({user : req.session.user})
})


app.listen(PORT, () => {
  console.log('Server Port : ', PORT)
})
