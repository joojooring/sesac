const express = require("express");
const http = require("http");
const app = express();
// http랑 app를 연결하는 과정
// socket이 http모듈로 생성된 서버에서만 동작함
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
    cors : {
        origin : "http://localhost:3000",
        // methods: ["GET","POST"]
    }
});


io.on("connection", (socket)=>{
    console.log("socket id :" ,socket.id)
    socket.on("hello", (res)=>{
        console.log(res);
        socket.emit("resHello",{msg : "안녕하신가유"});

    })
    socket.on("study",(res)=>{
        console.log(res);
        socket.emit("resStudy",{msg: "공부"});
    })

    socket.on("bye", (res)=>{
        console.log(res);
        socket.emit("resBye", {msg : "잘가랏"})
    })
})


server.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);

});