import "../styles/chat.css"
import { useEffect, useState } from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:8000/", {autoConnect : false});
export default function PracAlone () {
    const [msgInput, setMsgInput] = useState("");
    const [chatList, setChatList] = useState([
        {type : "my", content: "뭐해?"},
        {type : "other", content: "잘라고"},
        {type : "notice", content : "~님이 입장하셨습니다."}
    ])

    const sendMsg = () => {

    }

    const initSocketConnect = ()=>{
        if(!socket.connected) socket.connect();
    }

    useEffect(()=>{
        initSocketConnect();
    }, []);
    return(
        <>
        <h3>채팅실습 혼자해보자</h3>
        <ul>
            <li>채팅창 UI</li>
            <li>socket id 이용하여 누가 입장했는지 공지 띄우기</li>
        </ul>
        <div className="chat-container">
            <div className="list my-chat"></div>
            <div className="content" key={chatList} onChange={(e)=>setChatList(e.target.value)}></div>

        </div>

        <div className="input-container">
            <input type="text" value={msgInput} onChange={(e)=>setMsgInput(e.target.value)}></input>
            <button onClick={sendMsg}>전송</button>
        </div>


        </>
    )
}