import "../styles/chat.css"
import {useEffect, useState} from "react"
import Chat from "./Chat"
import Notice from "./Notice"
import io from "socket.io-client"

const socket = io.connect("http://localhost:8000", {autoConnect : false})


export default function Chatting1(){

const [msgInput, setMsgInput] = useState("")
const [chatList, setChatList] = useState([
    {type : "my",
    content : "안녕?"
    },
    {type : "other",
    content : "응 안녕?"
    },
    {type : "notice",
    content: "~님이 입장하셨습니다."
    }
])

const initSocketConnect = ()=>{
    console.log("??????",socket.connected)
    if(!socket.connected) socket.connect()
}

// 마운트시에 socket이 connect할 수 있도록 만들어주려면 useEffect
useEffect(()=>{
    initSocketConnect();

    // 마운트 시점에만 한 번 읽고 만다.
    // 마운트 시점에 chatlist만 이용하게 됨
    // socket.on("notice", (res)=>{
    //     const newChatList = [...chatList, {type : "notice", content : res.msg}]
    //     setChatList(newChatList);
    // })
},[])

useEffect(()=>{
    const notice = (res)=> {
        const newChatList = [...chatList,{type : "notice", content:res.msg}]
    
        setChatList(newChatList);
    }
    socket.on("notice", notice)
    return () => socket.off("notice", notice)
},[chatList])

const sendMsg = () => {}
    return(
        <>
        <h3>실습 2,3</h3>
        <ul>
            <li>채팅창 ui</li>
            <li>socket id를 이용해서 누가 입장했는지 공지를 띄우기</li>

        </ul>
        <div className="chat-container">
            {chatList.map((chat,i)=>  {
                if(chat.type === "notice") return <Notice key={i} chat={chat} />
                else return <Chat key={i} chat ={chat} />         
            }
            // <div key={i} className={`list ${chat.type}-chat`}>
            //     <div className="content">{chat.content}</div>
            // </div>
            )}

        </div>


        <div className="input-container">
        <input type="text" value={msgInput} onChange={(e)=>setMsgInput(e.target.value)}></input>
        <button onClick={sendMsg}>전송</button>
        </div>
        </>
    )
};