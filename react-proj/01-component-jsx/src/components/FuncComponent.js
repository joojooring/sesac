// const FuncComponent = ()=>{
//     return <h1>Function Component 입니다.</h1>
// }

import image from "./react-logo.png"

function FuncComponent() {
    const text = "hello??how are you?";
    const name = "richard";

    const ifrenderTest = ()=>{
        if (name==="lily"){
            return "안뇽?"
        } else if(name==="richard") {
            return "대표님이세요?"
        } else {
            return "누구십니까??"
        }
    };

    const style = {fontSize : '30px', color:'blue'};



    return (
    <>
    {/* 1. 특징 하나의 태그로 감싸서 return해야됨 */}
    <div>Function Component 입니다.</div>
    <div>함수형 컴포넌트입니다.2</div>

    {/* 2. 특징 : js문법 사용 가능 */}
    <h3>코딩온 {text}</h3>

    {/* 3. 삼항연산자 사용 가능 : 조건에 따른 랜더링을 하고 싶을 때(간단한것만 가능) */}
    {/* 조건 ? "true일때" : "false일때" */}
    {/* 복잡한 조건을 사용하고 싶으면 return 위에서 함수를 만들고 return안에서 실행시킬 수 있음 */}
    <h4>{name === "lily" ? "안녕하세요~" : "누구세요?"}</h4>
    <h4>{ifrenderTest()}</h4>

    {/* 4. 조건에 따른 랜더링 (&&) */}
        <h5> {name==="richard" && "안녕하세요~~!!!!!!!!!!!!!!!!!!!"}</h5>

    {/* 5. inline style 적용 방법 => style 속성 값으로 객체를 전달 객체는 {}중괄호로 감싸주기 때문에 한번 더 사용 */}
    {/* <div style="font-size : 20px; color : red"></div> */}
    <div style={{fontSize : '20px', color:'red'}}>인라인 스타일 적용방법</div>
    <div style={style}>위에서 선언함</div>

    {/* 6. class와 onclick사용법 */}
    {/* <div class="" onclick="함수();">원래 html에서 하던 방식</div> */}
    <div className="test-css">jsx에서 css 사용하기 속성은 className</div>

    {/* html에서는 onclick에서 함수를 호출했음 // jsx에서 onclick에서는 함수를 선언함 */}
    <button onClick={()=>{
        console.log("온클릭 함수다")
    }}>버튼
    </button>

    {/* 7. 종료 태그 필수! */}
    {/* / 적으면 경로가 public으로 감 */}
    <br />
    <img scr="/logo192.png" />
    {/* src 내부의 이미지 사용할 경우 => 위에서 이미지를 import해오기 */}
    <img src={image}></img>
    </>
    )
}



export default FuncComponent;