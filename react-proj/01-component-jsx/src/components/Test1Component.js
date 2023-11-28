function Test1Component() {
    const name = "나는 애옹이랑 멍멍이가 없어";
    const animal ="없다니까~ 기엽긴해"
    
    const style = {textDecoration : "underline"};

        const ififTest = ()=>{
        if (3+5==8){
            return "정답입니다."
        } else {
            return "오답입니다!"
        }
    };

    const a = 80;
    const b = 50;



    return (
    <>
    {/* 1. 특징 하나의 태그로 감싸서 return해야됨 */}
    {/* <h3>코딩온 {text}</h3> */}

    <h2 >나는 없어 
        <a style={style}> {name}</a>
        </h2>
    <h2 >이름도 없겠지
    <a style={style}> {animal}</a>
        </h2>


    {/* 3. 삼항연산자 사용 가능 : 조건에 따른 랜더링을 하고 싶을 때(간단한것만 가능) */}
    {/* 조건 ? "true일때" : "false일때" */}
    {/* 복잡한 조건을 사용하고 싶으면 return 위에서 함수를 만들고 return안에서 실행시킬 수 있음 */}
    <h4>{3+5===7 ? "true" : "false"}</h4>
    <h4>{ififTest()}</h4>



    {/* 4. 조건에 따른 랜더링 (&&) */}
    <h5> {a>b && "a가 b보다 큽니다."}</h5>

    </>
    )
}



export default Test1Component;