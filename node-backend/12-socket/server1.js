const express = require("express");
const http = require("http");
const app = express();
// http랑 app를 연결하는 과정
// socket이 http모듈로 생성된 서버에서만 동작함
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);

// const Socket = require("socket.io")
// const io = Socket(server)

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", function (req, res) {
    // res.render("client1");
    res.render("prac1")
});

io.on("connection", (socket)=>{
    // 콜백함수의 매개변수로 들어온 socket객체는 접속한 클라이언트의 socket임
    console.log("socket.id : ",socket.id);

    socket.on("hello", (res)=> {
        console.log("msg : ",res.msg);
        socket.emit("hello", {msg: "hello : 반가워요"})
    })

    socket.on("study", (res)=>{
        console.log("msg : ",res.msg);
        socket.emit("study", {msg: "study : 공부합시다..."})

    })

    socket.on("bye", (res)=>{
        console.log("msg : ",res.msg);
        socket.emit("bye", {msg: "bye : 잘가렴..."})

    })


    // on을 이용해서, 클라이언트에서 socket을 이용해서 보내준 데이터를 받을 이벤트를 등록함.
    // 콜백함수의 첫번째 매개변수로는 데이터가 들어옴
    
    socket.on("helloooooo", (res)=> {
        console.log("socket을 이용해서 보내준 데이터를 받음",res);

    socket.emit("byebye", {msg : "잘가용용이~"})
    });

    socket.on("entryStart", (res)=>{
        console.log(res);
        // 전체 클라이언트를 대상으로 데이터를 전송하고 싶을때는 io.emit사용
        io.emit("notice", {msg : `${socket.id}님이 입장했습니다.`})
    })
})


server.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);

});