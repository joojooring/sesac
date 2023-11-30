import {useState} from "react";

function EventFunc () {
    const [msg, setMsg] = useState("qqqwlwlwlwlwl헬로")
    //state변수
    const [name, setName] = useState("");

    const handleEnter = (e) => {
        // console.log(e)
        if(e.key == "Enter") {
            console.log("엔터가 눌렸습니다!!")
        }
    }

    const handleOnClick = (e) => {
        console.log(e.target);

        setMsg("잘가라라라라");

    }

    function handleOnClickHello() {
        setMsg("안뇽ㅇ뇨욘요뇽뇽")
    }


    const handleOnClickTest = (message) => {
        setMsg(message);

    }

    return (
        <>
        <h3>이벤트 핸들링 함수형 컴포넌트</h3>
        <div> 
            {msg} 

        <button onClick = {handleOnClick}>집가자~</button>
        <button onClick = {handleOnClickHello}>또 왔니</button>

        {/* 함수에서 매개변수를 받고 싶으면 어떻게 하나요 */}
        {/* 1. 첫번째 방법 : onClick에서 익명함수를 선언하고 내부에서 함수를 실행시킴 */}
        {/* <button onClick = {()=>{
            handleOnClickTest("안녕???")
            }}>테스트입니다.</button>
        */}

        {/* 2. 두번째 방법  : bind를 이용*/}
        {/* bind의 첫번째 매개변수는 앞에 있는(.앞에 있는 함수를 의미-handleOnClickTest) 객체의 this를 의미 */}
         <button onClick = {handleOnClickTest.bind(null, "ㄸ뜌뜌뜌뜌뜌ㄸ")}>바인드로 매개변수받자</button>
       

       <br />
       {/* onkeydown : key를 누를때를 의미 */}
       {/* input태그에서 "엔터"를 누르면 함수가 실행되도록 - "엔터를 눌렀습니다:"라는 문구가 콘솔에 찍히도록*/}
        <input type="text" value={name} onChange={(e)=>{
            // console.log(e.target)
            // setName 함수에 e.target.value를 사용하는 이유는 입력 필드의 값이 변경될 때마다 해당 값을 name 변수에 업데이트하기 위해서
            // onChange 이벤트는 입력 필드의 값이 변경될 때마다 발생
            // e.target은 이벤트가 발생한 요소를 가리키는데, 여기서는 입력 필드를 가리zla
            // e.target.value는 입력 필드의 현재 값
            // 따라서 setName(e.target.value)를 사용하여 name 변수의 값을 입력 필드의 현재 값으로 업데이트

            setName(e.target.value);
        }} onKeyDown={handleEnter}></input>

        </div>
        </>
    )
}


export default EventFunc;