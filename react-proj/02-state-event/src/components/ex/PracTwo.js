import {useState} from "react";



function PracTwo () {

    const [msg, setMsg] = useState("검정색 글씨")
    const [color, setColor] = useState("black");

    const changeRed = () => {
        setMsg("빨간색 글씨");
        setColor("red");
    }

    const changeBlue = () => {
        setMsg("파란색 글씨");
        setColor("blue");
    }

    return (
        <>
        <h2 style={{color : color}}>{msg}</h2>
        <button onClick={changeRed}>빨간색</button>
        <button onClick={changeBlue}>파란색</button>

        </>
    )
}

export default PracTwo;