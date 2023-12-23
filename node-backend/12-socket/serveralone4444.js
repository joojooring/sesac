const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

const cors = require("cors");
// const { channel } = require("diagnostics_channel");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

const chatRooms = {}; // 채팅방을 저장할 객체
const userIdArr = []; // 사용자 아이디를 저장할 배열

const updateUserList = (roomId) => {
  io.to(roomId).emit("userList", Object.values(chatRooms[roomId].users));
};

io.on("connection", (socket) => {
  socket.on("sendMsg", (res) => {
    const { roomId, dm, userId, msg } = res;
    if (dm === "all") {
      io.to(roomId).emit("chatchat", { userId: userId, msg: msg });
    } else {
      io.to(roomId).to(dm).emit("chatchat", {
        userId: userId,
        msg: msg,
        dm: true
      });
      socket.emit("chatchat", { userId: userId, msg: msg, dm: true });
    }
  });

  socket.on("entry", (res) => {
    const { roomId, userId } = res;
    if (!chatRooms[roomId]) {
      chatRooms[roomId] = {
        users: {}, // 각 채팅방의 사용자 목록을 저장할 객체
        channelName: "" // 채널명을 저장하는 속성
      };
    }
    const roomUsers = chatRooms[roomId].users;
    if (Object.values(roomUsers).includes(userId)) {
      socket.emit("error", {
        msg: "중복된 아이디가 존재하여 입장이 불가합니다."
      });
    } else {
      socket.join(roomId);
      io.to(roomId).emit("notice", { msg: `${userId}님이 입장하셨습니다.` });
      socket.emit("entrySuccess", { userId: userId , channel : roomId, channelName: chatRooms[roomId].channelName});
      console.log("룸룸룸룸룸룸룸룸룸룸",roomId)

    // 채널명을 저장하는 channelName 속성 추가
      chatRooms[roomId].channelName = roomId
      roomUsers[socket.id] = userId;
      updateUserList(roomId);

      if (!userIdArr.includes(userId)) {
        userIdArr.push(userId);
      }
    }
  });

  socket.on("leave", (roomId) => {
    const roomUsers = chatRooms[roomId].users;
    const userId = roomUsers[socket.id];
    delete roomUsers[socket.id];
    updateUserList(roomId);
    socket.leave(roomId);
    io.to(roomId).emit("notice", { msg: `${userId}님이 퇴장하셨습니다.` });

    const index = userIdArr.indexOf(userId);
    if (index !== -1) {
      userIdArr.splice(index, 1);
    }
  });

  socket.on("disconnect", () => {
    for (const roomId in chatRooms) {
      const roomUsers = chatRooms[roomId].users;
      if (roomUsers.hasOwnProperty(socket.id)) {
        const userId = roomUsers[socket.id];
        delete roomUsers[socket.id];
        updateUserList(roomId);
        socket.leave(roomId);
        io.to(roomId).emit("notice", { msg: `${userId}님이 퇴장하셨습니다.` });

        const index = userIdArr.indexOf(userId);
        if (index !== -1) {
          userIdArr.splice(index, 1);
        }
        
        break;
      }
    }
  });
});

server.listen(PORT, function () {
  console.log(`Server Open : ${PORT}`);
});
