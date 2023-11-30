import {useState} from "react";

const [a,b,c] = ["aaa", "bbb","ccc"];
console.log(a); // aaa
console.log(b); // bbb


function StateFunc () {
    // useState는 배열을 반환 -> 그 배열을 구조분해 하여 number, setNumber을 선언
    // [state변수, state함수를 변경시키는 함수를 리턴] = useState(state의 초기값을 넘겨줌)
    const  [number, setNumber] = useState(0)
    const  [text, setText] = useState("초기값이다~")

    return (
        <>
        <h3> 함수형 컴포넌트 state 공부</h3>
        <div>number state value {number} 
            <button onClick={()=>{
                // 아래처럼하면 +2가 되지 않음
                // setNumber(number +1);
                // setNumber(number +1);

            setNumber((prevNumber)=> prevNumber +1);
            setNumber((prevNumber)=> prevNumber +1);

            }}>+2</button>
        </div>

        <div>{text}</div>
        </>
    )
}

export default StateFunc;