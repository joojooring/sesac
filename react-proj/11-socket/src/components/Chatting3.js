import "../styles/chat.css";
import { useCallback, useEffect, useState, useMemo } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting3() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] =useState("all")


  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res)=>{
      setUserList(res)
    })
  
  }, []);


  // useMemo  ; 값을 메모라이징 한다.
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때마다 함수 실행시켜 연산을 실행해줌
  const userListOptions = useMemo(()=>{
    // [<option />]
    const options = []
    for (const key in userList){
      // key : userList의 key값 (soket.id)
      // userList[key] : userList의 value값 (user id)
      if(userList[key] === userId) continue;
      options.push(<option key={key} value={key}>{userList[key]}</option>)
    }
    return options
  },[userList])


  // useCallback: 함수를 메모라이징 한다
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언함.
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.dm ? "(속닥속닥)" : ""} ${res.userId}: ${res.msg}`
      // const content = res.dm ?  `(속닥속닥)${res.userId}: ${res.msg}` :  `${res.userId}: ${res.msg}`
      const newChatList = [
        ...chatList,
        // { type: type, content: `${res.userId}: ${res.msg}` },
          { type: type, content: content },

      ];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chatchat", addChatList);
    return () => socket.off("chatchat", addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo  });
      setMsgInput("");
    }
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput });
  };
  return (
    <>
      <h3>실습 4, 5번</h3>
      <ul>
        <li>채팅창 메세지 전송</li>
        <li>DM 기능 구현</li>
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
            <select value={dmTo} onChange={(e)=>setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <>
          <div className="input-container">
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}