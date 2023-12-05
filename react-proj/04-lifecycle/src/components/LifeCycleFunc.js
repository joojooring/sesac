import {useEffect, useState} from "react"

function LifeCycle (props) {
    const {number} = props
    const [text, setText] = useState("")

    // useEffect의 형태 : 함수임 useEffect(콜백함수, 의존성배열-여기에 값에 따라 앞에 있는 콜백함수가 동작하느냐 마냐 결정)

    // 1. 의존성배열의 빈 배열의 형태로 뒀을때 []. mount되는 시점임
    // mount시에 콜백함수 실행시킴
    // 의존성배열의 빈 배열의 형태에서 콜백함수 내부에 return 뒤에 오는 함수를 unmount시 실행시킴
    useEffect(()=>{
        // console.log("function component : ❤️ mount 될 때", )

        return () => {
            // console.log("function component : ❌ unmount 될 때", )
        }
    }, [])

    // 2. useEffect에 의존성 배열을 전달하지 않을 경우
    // mount시와 update시에 콜백함수를 실행시킴
    useEffect(() => {
        // console.log("function component : ✅ update 될 때", )
    });

    // 3. useEffect에 의존성 배열에 원소가 존재할 경우
    // mount시와 해당 원소가 update될 때마다 콜백함수를 실행
    useEffect(()=>{
        // console.log("function component : 🎶🎶 text update", )

    }, [text])

    return(
        <>
        <h2>함수형 컴포넌트 LifeCycle 공부</h2>
        <div>number : {number}</div>
        <input 
            type="text" 
            value={text} 
            onChange={(e)=>setText(e.target.value)}></input>
        </>
    )

}

export default LifeCycle;