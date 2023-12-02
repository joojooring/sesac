import { useRef } from "react";


function FuncRef () {
    // 1.특정 DOM요소를 사용할때
    const input = useRef();

    // 2.로컬변수로 사용 (랜더링되어도 값이 그대로 유지; ref안의 변경되어도 컴포넌트는 랜더링되지 않음)
    const localVariable = useRef(0);
    // const localVariable = 0;

    const foucusInput = () => {
        input.current.focus();
    }

    const plusLocalVariable = () => {
        localVariable.current ++;
        console.log(localVariable.current)
    }

    return(
        <>
        <input type="text" ref={input}></input>
        <button onClick={foucusInput}>클릭</button>

        <div>{localVariable.current}</div>
        <button onClick={plusLocalVariable}>플러스!</button>

        </>
    )
}

export default FuncRef;