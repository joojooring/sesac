import {useState} from "react";

const PracThree = () => {
    const [msg, setMsg] = useState("안녕하세요")
    const [btn, setBtn] = useState("사라져라")
    const clickShow = () => {
        if(msg ===""){
            setMsg("안녕하세요")
            setBtn("사라져라")
        } else {
            setMsg("")
            setBtn("보여라")
        }
    }

    return (
        <>
        <h1>{msg}</h1>
        <button onClick={clickShow}>{btn}</button>
        </>
    )
}

export default PracThree;