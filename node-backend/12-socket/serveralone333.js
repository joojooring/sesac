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

const userIdArr = {}

const updateUserList = ()=>{
    io.emit("userList", userIdArr)
}

io.on("connection", (socket)=>{
    // io.emit("notice", {msg : `${socket.id}님이 입장하셨습니다.`})
    // socket.on("entry", (res)=>{
    //     io.emit("notice", {msg : `${res.userId}님이 입장하셨습니다.`})
    // })
    socket.on("sendMsg", (res)=>{
        io.emit("chatchat", {userId : res.userId, msg : res.msg})
    })
    // 입장시에 받은 userid로 입장 공지
    socket.on("entry", (res)=> {
        // 위에선 선언된 userIdArr 객체 배열에서 res.userId가 포함되었는지를 확인
        // includes 메서드는 배열에 특정 요소가 포함되어 있으면 true를 반환
        // 중복 사용자 id가 있는지를 확인
        if(Object.values(userIdArr).includes(res.userId)){
            socket.emit("error", {msg : "중복된 아이디가 존재하여 입장이 불가합니다."})
        }else{
            // 중복 아이디가 없을 경우 else에서 처리
            io.emit("notice", {msg : `${res.userId}님이 입장하셨습니다.`})
            socket. emit("entrySuccess", {userId : res.userId})
            userIdArr[socket.id] = res.userId; // socketid랑 userid를 일치시켜서 저장
            updateUserList()
        }
    })
})


server.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);

});