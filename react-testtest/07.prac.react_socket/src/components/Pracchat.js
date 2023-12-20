import io from "socket.io-client"
import {useEffect, useRef} from "react"
const socket = io.connect("http://localhost:8000", {autoConnect: false})
export default function PracChat () {

    const initSocketConnect = () => {
        if(!socket.connected) socket.connect();
    }

    useEffect(()=>{
        initSocketConnect()

        socket.on("resHello", (res)=>{
            console.log(res)
            resultMsg(res)
        })

        socket.on("resStudy", (res)=>{
            resultMsg(res)
        })
        socket.on("resBye", (res)=> {
            resultMsg(res)
        })
    },[])

    const resultMsg = (res)=> {
        result.current.innerText = res.message
    }

    const hello = () => {
        socket.emit("hello", {message: "안녕반가워"})
    }
    const study = () => {
        socket.emit("study", {message : "공부햇"})
    }
    const bye = () => {
        socket.emit("bye", {message : "잘가"})
    }
    const result = useRef(null);

    return(
        <>
        <h3> 소켓 실습 다시! 1.</h3>
        <button onClick={hello}>hello</button>
        <button onClick={study}>study</button>
        <button onClick={bye}>bye</button>

        <p ref={result}></p>
        </>
    )
}