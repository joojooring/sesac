import { useState, useCallback } from "react"

//useCallback 훅은 결과값을 저장해 최적화 시키는 useMemo와 다르게 함수 자체를 저장
// 다시 리랜더링 될 때 함수를 다시 선언하고 호출하는 것을 방지해서 최적화
// const 함수명 = useCallback(콜백함수, [의존성배열])
// 의존성배열의 요소에 변화가 있으면 callback함수가 실행되는 것은 useMemo와 같음
// useCallback 에 저장할 함수가 satate에 의존적이지 않은 함수라면 빈 배열을 넣어도 됨
export default function UseCallbackHookPrac(){
    const [text, setText] = useState("Item 1")
    const [inputtxt, setInputtxt] = useState("")
    const [isEdit, setIsEdit] = useState(false)

    const edit = useCallback(()=>{setIsEdit(true)},[]);

    const handleInputChange = useCallback((e)=>{setInputtxt(e.target.value)},[]);
    const hanldeEditSave = useCallback(()=>{setText(inputtxt); setIsEdit(false)},[inputtxt]);

    // const edit = useCallback((e)=>setText(e.target.value),[setText])

    return(
        <>
        <h3>useCallback 훅 실습</h3>

        <li>
        {isEdit ? (
            <input type="text" value={inputtxt} onChange={handleInputChange}></input>
        ) : (<div>{text}</div>)}
        <button onClick={edit}>Edit</button>
        <button>Delete</button>
        {isEdit && <button onClick={hanldeEditSave}>Save</button>}

        </li>
        {/* <li value={text} onChange={(e)=>setText(e.target.value)}>{text}
        <button onClick={edit}>Edit</button>
        <button>Delete</button>
        </li> */}

        <li>Item 2
        <button>Edit</button>
        <button>Delete</button>
        </li>


        <li>Item 3
        <button>Edit</button>
        <button>Delete</button>
        </li>

        </>
    )
};
