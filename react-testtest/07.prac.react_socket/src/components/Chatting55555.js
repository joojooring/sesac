import "../styles/chat.css"
import {useEffect, useState, useMemo, useCallback} from "react"
import Chat from "./Chat"
import Notice from "./Notice"
import io from "socket.io-client"

const socket = io.connect("http://localhost:8000", {autoConnect : false})


export default function Chatting4444(){

const [userIdInput, setUserIdInput] = useState("")
const [userId, setUserId] = useState(null)
const [msgInput, setMsgInput] = useState("")
const [chatList, setChatList] = useState([
])

const [userList, setUserList] = useState({})
const [dmTo, setDmTo] = useState("all")
const [chatRooms, setChatRooms] = useState([]); // 채팅방 정보를 저장할 배열

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

    socket.on("userList", (res)=>[
        setUserList(res)
    ])
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
        socket.emit("sendMsg", {userId : userId, msg : msgInput, dm : dmTo})
        setMsgInput("");
    }
}


// useEffect(()=>{
//     socket.on("chatchat", (res)=>{

//         const type = res.userId ===userId ? "my" : "other"
//         const newChatList = [...chatList, {type : type, content : `${res.userId}: ${res.msg}`}]
//         setChatList(newChatList)
//     })

// },[userId, chatList])




const entryChat = () => {
    // 1. 입장할 떄 실행시키겠다.
    initSocketConnect();
    socket.emit("entry", {userId: userIdInput})
    // setUserId(userIdInput)
}

// useMemo(값을 메모라이징) : state나 props가 변경시 안바뀐건 랜더링 안함, rendering과정에서 특정 값이 바뀌었을 때만 연산 실행
// useCallback(함수를 메모라이징) : useMemo와 유사하지만 다시 redering될 때 함수 다시 불러오는걸 막음, 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언 


const userListOptions = useMemo(()=>{
    //userList 객체를 기반으로 하는 옵션 리스트 계산
    // userList 객체의 각 키와 값에 대해 조건을 검사, 조건에 맞는 옵션 요소를 options배열에 추가
    // for ...in문은 객체의 속성을 반복하여 해당 속성의 키를 변수에 할당해서 반복 작업을 수행
    // 해당 속성의 키 값을 사용해서 option요소를 생성, options 배열에 추가하게끔 함
    // key : userList의 key값 (socket.id)
    // userList[key] : userList의 value값(user id)
    const options = []
    for (const key in userList){
        if(userList[key] === userId) continue;
        options.push(<option key={key} value={key}>{userList[key]}</option>)
    }
    return options
},[userList])



const addChatList = useCallback(
    (res)=>{
    const type = res. userId === userId ? "my" : "other";
    const content = res.dm ? `(비밀!)${res.userId} : ${res.msg}` : `${res.userId} : ${res.msg}`
    const newChatList = [...chatList, {type : type, content : content}];
    setChatList(newChatList)
}, [userId, chatList])


// useEffect는 컴포넌트가 마운트되거나 언마운트될 때 특정 작업 수행
//  chatchat이벤트 수신, 수신된 채팅 데이터를 addChatList 함수를 통해 chatList에 추가
// 채팅 데이터를 수신하고 처리하는 작업은 컴포넌트가 마운트 되었을 때 이벤트리스너를 등록, 언마운트시 이벤트제거 하는게 좋음
//  => 채팅 데이터를 수신하고 처리하기 위한 이벤트 리스너 등록과 제거를 담당하는 기능
useEffect(()=>{
    socket.on("chatchat", addChatList);
    return() => socket.off("chatchat",addChatList)
},[addChatList])



const createChatRoom = () => {
    // 랜덤한 방 이름 생성
    const roomName = Math.random().toString(36).substring(7);
    // 새로운 채팅방 정보 생성
    const newChatRoom = { name: roomName, users: [] };
    // 기존 채팅방 배열에 추가
    setChatRooms([...chatRooms, newChatRoom]);
  };

  const enterChatRoom = (roomIndex) => {
    // 선택한 채팅방 정보 가져오기
    const selectedChatRoom = chatRooms[roomIndex];
    // 채팅방 입장 처리
    // TODO: 입장 처리 로직 추가
    // 선택한 채팅방 정보를 활용하여 다른 동작 수행
  console.log(`입장한 채팅방: ${selectedChatRoom.name}`);
  // 여기에서 채팅방 페이지로 이동하거나, 채팅방 정보를 업데이트하는 등의 동작을 수행할 수 있습니다.
  };

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

{chatRooms.map((chatRoom, index) => (
  <div key={index} className="chat-room">
    <span>{/* 아이콘 표시 */}</span>
    <span>{chatRoom.name}</span>
    <button onClick={() => enterChatRoom(index)}>입장</button>
  </div>
))}
                <div>{userId}님 환영합니다.</div>
                <div className="chat-container">
                    {chatList.map((chat,i)=>  {
                        if(chat.type === "notice") return <Notice key={i} chat={chat} />
                        else return <Chat key={i} chat ={chat}/>         
                    }
                    )}
                    </div>
                <div className="input-container">
                    <select value={dmTo} onChange={(e)=>setDmTo(e.target.value)}>
                        <option value="all">전체</option>
                        {userListOptions}
                    </select>
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