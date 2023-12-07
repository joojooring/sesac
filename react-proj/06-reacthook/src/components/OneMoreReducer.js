import {useCallback, useReducer, useState} from "react";

const initialValue = 1;
const reducer = (prevstate, action) => {
    switch(action.type) {
        case "Plus" :
            return prevstate+1
        case "Minus" :
            return prevstate-1
        case "Multifly" :
            return prevstate *2
        case "Division" :
            return  prevstate /2


        case "AnotherMultifly" :
            return prevstate * action.number;
        default :
            return prevstate

    }
}

function OneMoreReducer () {
// state는 원하는 변수명(상태)
// dispatch : 액션을 발생시키는 함수
// reducer 실질적으로 상태를 업데이트 하는 함수(결국 dispatch가 실행시키는 함수가 reducer가 됨)
// initialValue : 초기값
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [number, setNumber] = useState(5);

    const handleChangeNumber = useCallback((e)=>setNumber(e.target.value),[])

    // const anothermultifly = () => dispatchAnother(number)
    
    return (
        <>

        <h3>리듀서 다시 연습</h3>
        <div> {state}
            <button onClick={()=>dispatch("Plus")}>+1</button>
            <button onClick={()=>dispatch("Minus")}>-1</button>
            <button onClick={()=>dispatch("Multifly")}>곱하기</button>
            <button onClick={()=>dispatch("Division")}>나누기</button>
        </div>
        
        <input type="number" value={number} onChange={handleChangeNumber}></input>
        <button onClick={()=>setNumber({type : "AnotherMultifly", number:number})}>다른방법 곱하기</button>

        <input type="number"></input>
        <button>다른방법 나누기</button>

        </>
    )

};


export default OneMoreReducer;