import {useRef} from "react";

function ScrollBox () {

    const box = useRef();
    const scrollTop = () => {
        box.current.scrollTop = 0
    }
    return(
        <>
        <div className="scroll-box" ref={box}>
            <h1>호랑나비</h1>
            <h1>흰나비</h1>
            <h1>호랑이</h1>
            <h1>고양이</h1>
            <h1>강아지</h1>
            <h1>두꺼비</h1>
        </div>

        <button onClick={scrollTop}>위로</button>
        </>
    )
}


export default ScrollBox;