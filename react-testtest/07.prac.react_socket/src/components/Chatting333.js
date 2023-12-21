import "../styles/chat.css"
import {useEffect, useState} from "react"
import Chat from "./Chat"
import Notice from "./Notice"
import io from "socket.io-client"

const socket = io.connect("http://localhost:8000", {autoConnect : false})


export default function Chatting333(){

const [userIdInput, setUserIdInput] = useState("")
const [userId, setUserId] = useState(null)
const [msgInput, setMsgInput] = useState("")
const [chatList, setChatList] = useState([
])
const initSocketConnect = ()=>{
    console.log("??????",socket.connected)
    if(!socket.connected) socket.connect()
}

useEffect(()=>{
    // initSocketConnect();
    socket.on("error", (res)=>{
        alert(res.msg)
    })

    socket.on("entrySuccess", (res)=>{
        setUserId(res.userId)
    })
},[])

useEffect(()=>{
    const notice = (res)=> {
        const newChatList = [...chatList,{type : "notice", content:res.msg}]
    
        setChatList(newChatList);
    }
    socket.on("notice", notice)
    return () => socket.off("notice", notice)
},[chatList])

const sendMsg = () => {
    if(msgInput !== "") {
        socket.emit("sendMsg", {userId : userId, msg : msgInput})
        setMsgInput("");
    }
}


useEffect(()=>{
    socket.on("chatchat", (res)=>{

        const type = res.userId ===userId ? "my" : "other"
        const newChatList = [...chatList, {type : type, content : `${res.userId}: ${res.msg}`}]
        setChatList(newChatList)
    })

},[userId, chatList])



const entryChat = () => {
    // 1. 입장할 떄 실행시키겠다.
    initSocketConnect();
    socket.emit("entry", {userId: userIdInput})
    // setUserId(userIdInput)
}
    return(
        <>
        <h3>실습 3-1, 3-2, 3-3</h3>
        <ul>
            <li>닉네임 입력 후 입장시키게끔</li>
            <li>닉네임 중복 방지하기</li>
            <li>퇴장시키기</li>

        </ul>

        {userId ? 
        (
            <>
                <div>{userId}님 환영합니다.</div>
                <div className="chat-container">
                    {chatList.map((chat,i)=>  {
                        if(chat.type === "notice") return <Notice key={i} chat={chat} />
                        else return <Chat key={i} chat ={chat}/>         
                    }
                    )}
                    </div>
                <div className="input-container">
                <input type="text" value={msgInput} onChange={(e)=>setMsgInput(e.target.value)}></input>
                <button onClick={sendMsg}>전송</button>
                </div>
            </>
        )
        :
        (
            <>
                <div className="input-container">
                    <input type="text" value={userIdInput} onChange={(e)=>setUserIdInput(e.target.value)}></input>
                    <button onClick={entryChat}>입장</button>
                </div>
            </>   
        ) 
    }
        </>
    )
};