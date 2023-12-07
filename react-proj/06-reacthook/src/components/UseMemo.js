import {useMemo, useState} from "react"

// useMemo란 ? state나 props가 변경시 리랜더링이 될텐데 안바뀐 불필요한 연산을 방지해줌

function UseMemo () {
    const [count,setCount] = useState(0);
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

// 현재버전
// useMemo(콜백함수, 의존성배열-이배열의 값이 변경될때만 이루어질 수 있는 값을 넣어주면 됨)의 형태
// useMemo : 불필요한 연산을 방지, 값을 기억 함. count의 변경이 있을때만 다시 연산하여 calc에 담음
    const calc = useMemo(()=>{
        console.log("계산 : ", count);
        return count*2

    },[count]);



// 이전버전 : 문제점(count state가 변경되지 않아도, 랜더링 될때마다 다시 연산함-비효율적)
// 이렇게 하면 연산이 이루어지지 않는 text가 settext가 될 때도 count연산이 일어나게 됨
// => count가 변경될 때만 연산이 되도록 하려면 useMemo사용하면 됨
    // const calc = () =>{
    //     console.log("계산 : ", count);
    //     return count*2
    // }

    return(
        <>
        <h3> useMemo 공부</h3>
        <div>
            먼저 count : {count}
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
        <div>calculate : {calc}</div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        </>
    )
};

export default UseMemo;