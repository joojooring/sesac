import io from "socket.io-client"
import {useEffect, useRef} from "react"
// autoConnect는 옵션 : 자동으로 connecting하지 않겠다는 뜻
// 나중에 connecting 함수를 사용하려고
const socket = io.connect("http://localhost:8000",{autoConnect: false})
export default function Practice1(){

    const initSocketConnect = ()=>{
        if(!socket.connected) socket.connect()
    }

    // 마운트 될 때 실행하게끔
    useEffect(()=>{
        initSocketConnect();

        socket.on("resHello",(res)=>{
            console.log(res);
            resultMsg(res)
        })

        socket.on("resStudy", (res)=>{
            console.log(res);
            resultMsg(res)
        })

        socket.on("resBye", (res)=>{
            console.log(res);
            resultMsg(res)
        })
    },[])


    const resultMsg = (res)=>{
        result.current.innerText = res.msg
    }

    const hello =()=>{
        socket.emit("hello",{msg : "안녕"})
    }
    const study =()=>{
        socket.emit("study",{msg : "공부해"})
    }
    const bye =()=>{
        socket.emit("bye",{msg : "잘가"})
    }

    const result = useRef(null);


    return(
        <>
        <h3> 리액트-소켓 실습1</h3>
        <button onClick={hello}>hello</button>
        <button onClick={study}>study</button>
        <button onClick={bye}>bye</button>
        <h4 ref={result}></h4>

        </>
    )
}