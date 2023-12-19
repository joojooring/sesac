import "../styles/chat.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting1() {
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "my",
      content: "안녕?",
    },
    {
      type: "other",
      content: "응 안녕?",
    },
    {
      type: "notice",
      content: "~~~~~~님이 입장하셨습니다.",
    },
  ]);

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    // [이슈 1] mount 시에만 한 번 읽고 말아요.
    // newChatList를 만들 때, mount 시점에 chatList만 이용하게 된다.
    // socket.on("notice", (res) => {
    //   const newChatList = [...chatList, { type: "notice", content: res.msg }];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    // [해결 1] chatList가 변경될 때마다 event를 다시 만들도록 함.
    // [이슈 2] notice이벤트가 chatList가 변경될 때마다 누적됨.
    // socket.on("notice", (res) => {
    //   console.log("notice");
    //   const newChatList = [...chatList, { type: "notice", content: res.msg }];
    //   setChatList(newChatList);
    // });

    // [해결 2] return 이용해 notice 이벤트를 제거 후, 다시 생성할 수 이도록 함.
    const notice = (res) => {
      // console.log("notice");
      const newChatList = [...chatList, { type: "notice", content: res.msg }];

      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {};
  return (
    <>
      <h3>실습 2, 3번</h3>
      <ul>
        <li>채팅창 UI</li>
        <li>socket id 이용하여 누가 입장했는지 공지 띄우기</li>
      </ul>
      <div className="chat-container">
        {chatList.map((chat, i) => {
          if (chat.type === "notice") return <Notice key={i} chat={chat} />;
          else return <Chat key={i} chat={chat} />;
        })}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
        />
        <button onClick={sendMsg}>전송</button>
      </div>
    </>
  );
}