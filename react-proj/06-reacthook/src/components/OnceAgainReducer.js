import { useReducer, useState, useCallback } from "react";

const initialValue = {value : 5}

const reducer = (prevstate, action) =>{
    switch(action.type) {
        case "Multifly" :
            return {value : prevstate.value * action.number}
        case "Division" :
            return {value : prevstate.value / action.number}
    }
}

function OnceAgainReducer () {
    const [number, setNumber] = useState(5);
    const [aaa, dispatch] = useReducer(reducer,initialValue);

    // const handleChangeNumber = useCallback((e)=>setNumber(e.target.value),[])
    // useCallback 훅을 사용하여 handleChangeNumber 함수를 생성합니다. 이 함수는 입력값이 변경될 때마다 setNumber 함수를 호출하여 number 상태를 업데이트합니다.


    // const multifly = () => dispatch({type: "Multifly", number : number})

    return(
        <>
        <h3>리듀서랑 콜백함수 다시 연습</h3>
        <div> {aaa.value}
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>dispatch({type : "Multifly", number : number})}>곱하자</button>
        <br />
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>dispatch({type: "Division", number : number})}>나누기</button>

        </div>
        </>
    )
};

export default OnceAgainReducer;