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
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket)=>{
    // io.emit("notice", {msg : `${socket.id}님이 입장하셨습니다.`})
    socket.on("entry", (res)=>{
        io.emit("notice", {msg : `${res.userId}님이 입장하셨습니다.`})
    })
})


server.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);

});