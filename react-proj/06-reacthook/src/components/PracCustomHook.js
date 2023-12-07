import usePrac from "../hooks/usePrac";

function PracCustomHook () {

    const [value, toggle] = usePrac(false);
    return(
        <>
        <h3>커스텀훅 연습하자</h3>
        {/* value가 true일때 div값이 보일 수 있게끔 하기위해서 &연산자 사용 */}
        {value && <div>보이냐?</div>}
        <button onClick={toggle}>토글 커스텀훅</button>
        </>
    )

};

export default PracCustomHook;