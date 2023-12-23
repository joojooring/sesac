const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const userIdArr = {}
const chatRooms = {}; // 채팅방을 저장할 객체


const updateUserList = (roomId)=>{
    io.emit("userList", userIdArr)
    // io.to(roomId).emit("userList", Object.values(chatRooms[roomId].users));

}

io.on("connection", (socket)=>{
    socket.on("sendMsg", (res)=>{
        io.emit("chatchat", {userId : res.userId, msg : res.msg})
    })
    socket.on("entry", (res)=> {
        if(Object.values(userIdArr).includes(res.userId)){
            socket.emit("error", {msg : "중복된 아이디가 존재하여 입장이 불가합니다."})
        }else{
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