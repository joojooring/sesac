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
    <h2 >나는 없어 
        <a style={style}> {name}</a>
        이름도 없겠지
    <a style={style}> {animal}</a>
        </h2>

    <h4>{3+5===7 ? "true" : "false"}</h4>
    <h4>{ififTest()}</h4>

    <h5> {a>b && "a가 b보다 큽니다."}</h5>

    </>
    )
}



export default Test1Component;