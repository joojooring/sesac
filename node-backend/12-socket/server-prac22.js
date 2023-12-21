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
    }
});

const userIdArr = {}
// {key : value}
// key에는 socketid 저장 socket.id
// value에는 user가 만든 userId
// 소켓 ID(socket.id)와 사용자가 만든 사용자 ID(res.userId)를 연결하는 역할
// 이런걸 dictionary라고 함
// {"socket.id" : "userIda", "socket.id" : "userIdb", "socket.id" : "userIdc" }


const updateUserList = ()=>{
    io.emit("userList", userIdArr)
}


io.on("connection", (socket)=>{
    console.log("socket id :" ,socket.id);
    // [실습 3번] socket id를 이용해 입장 공지
    // io.emit("notice", {msg : `${socket.id}님이 입장하셨습니다.`})

    // [실습3-1] 입장시에 받은 userid로 입장 공지
    socket.on("entry", (res)=>{
        //     //[실습3-2] 닉네임이 중복되는지에 따라 정상적으로 notice하던지
        //  중복된다는 오류 메세지를 보내주던지
        // Object.values(userIdArr) => ["userIda", "userIdb", "userIdc"]
        // includes : 문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 안하는지 찾을 수 있음
        // indexOf : 배열에서 인자로 넘겨준 값이 몇번째 인자로 있는지(값의 인덱스를 추출), 만약 없다면 -1을 반환해줌 ==-1 이렇게 비교해주면 됨
        if(Object.values(userIdArr).includes(res.userId)){
            //닉네임이 중복될 경우 if문으로 들어옴
            socket.emit("error", {msg : "중복된 아이디가 존재하여 입장이 불가합니다."})

        }else {
            //닉네임이 중복되지 않을 경우 else로 넘김

            io.emit("notice", {msg : `${res.userId}님이 입장하셨습니다.`})
            socket.emit("entrySuccess", {userId : res.userId})
            userIdArr[socket.id] = res.userId;
            updateUserList()
        }

    // [실습3-3] 퇴장시키기 : 누가 입장하고 있는지 알아야 하고, 해당 정보를 전체적으로 저장할 필요가 있음
        // userIdArr[socket.id] = res.userId;
        // io.emit("notice", {msg : `${res.userId}님이 입장하셨습니다.`})

        console.log("????????????????",userIdArr)
    });    


    //[실습3-3] 퇴장시키기
    socket.on("disconnect",()=>[
        io.emit("notice", {msg : `${userIdArr[socket.id]}님이 퇴장하셨습니다.`}),
        delete userIdArr[socket.id]

    ])
    console.log("!!!!!!!!!", userIdArr)
    updateUserList()
    socket.on("sendMsg", (res)=>{
        if(res.dm === "all") io.emit("chatchat", {userId : res.userId, msg : res.msg})
        else {
        // io.to(소켓아이디).emit()
            io.to(res.dm).emit("chatchat", {userId : res.userId, msg : res.msg, dm : true})
            socket.emit("chatchat", {userId : res.userId, msg : res.msg, dm : true})
        }
    })
})


server.listen(PORT, function () {
    console.log(`Server Open : ${PORT}`);

});