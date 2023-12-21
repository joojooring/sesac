import "../styles/chat.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting1() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("")
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


  const [userId, setUserId] = useState(null)
  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    // initSocketConnect();

// [이슈 1] mount 시에만 한 번 읽고 말아요.
    // newChatList를 만들 때, mount 시점에 chatList만 이용하게 된다.
    // socket.on("notice", (res) => {
    //   const newChatList = [...chatList, { type: "notice", content: res.msg }];
    //   setChatList(newChatList);
    // });

    socket.on("error", (res)=>{
      alert(res.msg);
    });

    socket.on("entrySuccess", (res)=>{
      setUserId(res.userId)
    })
    
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
      const newChatList = [...chatList, { type: "notice", content: res.msg }];

      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);
  // 변할 수 있는 값을 의존성 배열에 넣어야됨

  const sendMsg = () => {};

  const entrychat = () => {
    initSocketConnect();
    socket.emit("entry", {userId: userIdInput});
    // [실습 3-2] 바로 userid에 값을 넣지 말고 success받으면 실행/ error를 받으면 alert를 받기
    
    // setUserId(userIdInput);
  }
  return (
    <>
      <h3>실습 3-1, 3-2, 3-3</h3>
      <ul>
        <li>닉네임 입력받고 입장 시키기</li>
        <li>닉네임 중복방지- 서버단에서 실행해야됨 for문과 if문 사용</li>
        <li>퇴장시키기</li>

      </ul>

      {userId ? (
<>
        <div>{userId}님 환영합니다.</div>
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
      )
      : 
      
      <div className="input-container">
        <input
          type="text"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
        />
        <button onClick={entrychat}>입장</button>
      </div>
    }



    </>
  );
}