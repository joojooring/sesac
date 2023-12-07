import {useCallback, useState} from "react";


// useCallback : 함수를 기억함
// -> 함수를 왜 기억해야 됨? 랜더링될때마다 함수도 리랜더링 되기 때문에 효율적 사용을 위해 useCallback을 쓰는거임
// component가 랜더링 될 때, 컴포넌트 내부에 있는 함수도 다시 선언하게 됨
// 다시 선언할 필요가 없는 함수는 다시 선언하지 않고 이전에 선언한 함수를 사용하는게 효율적.
function UseCallback() {

    const [text, setText] = useState("");
    // const handleOnchage = (e) => {
    //     setText(e.target.value)
    // }

    // 의존성 배열이 빈 값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가,
    // update 될 때 다시 선언하지 않고 기억하고 있는 함수를 사용함.
    // 컴포넌트 내부에서 변경될 수 있는 값은 ? 대표적으로 state, props
    // handleOnchage함수에서는 UseCallback컴포넌트에서 text라는 state변수가 변경될 수 있는 유일한 값임.
    // 
        const handleOnchage = useCallback( (e) => {
        setText(e.target.value)
    },[])


    
return(
    <>
    <h3>useCallback 공부</h3>

    <input type="text" value={text} onChange={handleOnchage}></input>
    </>
)
};

export default UseCallback;