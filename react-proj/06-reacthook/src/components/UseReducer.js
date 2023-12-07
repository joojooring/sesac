import { useCallback, useReducer, useState } from "react";

const initialValue = {value: 0}
const reducer = (prevstate, action) =>{
    switch(action.type) {
        case "Plus" :
            // 위에서 객체형태로{} 선언했기때문에 리턴값도 객체형태로
            return {value : prevstate.value +1};
        case "Minus" :
            return {value : prevstate.value -1};
        case "Reset" :
            return initialValue;
        case "Multifly" :
            return {value : prevstate.value * action.number};
        case "Division" :
            return {value : prevstate.value / action.number};
    
    
        default :
            return {value : prevstate.value};
    }
}

function UseReducer() {
    // state 자리는 원하는 변수명(상태)
    // dispatch : 액션을 발생시키는 함수
    // reducer : 실질적으로 상태를 업데이트 하는 함수 (결국 distpatch가 실행시키는 함수가 reducer가 됨)
    // initialValue : 초기값을 넣어주면 됨 

    const [state, dispatch] = useReducer(reducer, initialValue);
    const [number, setNumber] = useState(0);

    const handleChangeNumber = useCallback((e)=>setNumber(e.target.value),[])

    const plus = () => dispatch({type: "Plus"})
    const minus = () => dispatch({type: "Minus"})
    const reset = () => dispatch({type: "Reset"})
    const multifly = () => dispatch({type: "Multifly", number: number})
    const division = () => dispatch({type : "Division", number : number})


    // useState를 사용한 버전
    // 지금은 +-reset만 이용하고 있지만,
    // 만약에 곱하기,,나누기 등 더 많은 연산을 이용한다고 하면?
    // 또 컴포넌트 자체가 복잡해져서 코드가 길어진다면 useReducer를 써주면 됨
    // state의 변화를 추적하고 싶음 
    // => setState를 일일이 찾아가면서 +1도 되구나..-1도 되구나.. 이런식으로 순차적으로 알수 있는 방법밖에 없음
    // => 만약 reducer를 사용한다면, reduver함수만 읽으면 한번에 알 수 있음
    // const [state, setState] = useState(initialValue);
    // const plus = () => {setState({value : state.value +1})}
    // const minus = () => {setState({value : state.value +1})}
    // const reset = () => {setState(initialValue)}


    return(
        <>
        <h3>UseReducer 공부</h3>
        <div>{state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>

        <br />
        <input type="number" value={number} onChange={handleChangeNumber}></input>
        <button onClick={multifly}>곱하기</button>
        <br />

        <input type="number" value={number} onChange={handleChangeNumber}></input>
        <button onClick={division}>나누기</button>
        </div>
        </>
    )
}
export default UseReducer;