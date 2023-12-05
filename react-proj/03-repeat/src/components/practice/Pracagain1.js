import {useState} from "react";

function PracAgain () {
    // alpha 상태는 초기값
    const [alpha, setAlpha] = useState([
        {id:1, alphabet : "aaaa"},
        {id:2, alphabet : "bbbb"},
        {id:3, alphabet : "cccc"},
        {id:4, alphabet : "dddd"},
        {id:5, alphabet : "eeee"},
    ]);

    // inputAlpha 상태는 빈 문자열로 초기화
    const [inputAlpha, setInputAlpha] = useState("");

    const addAlpha = () => {
        if (!inputAlpha) {
            alert("알파벳을 입력하세요.");
            return;
        }else if (inputAlpha.trim().length === 0){
            alert("띄어쓰기는 입력되지 않아요. 알파벳을 입력하세요.")
            return;
        } 
// 배열의 가장 마지막에 인자로 받은 값을 추가하는 메서드 : concat()
        const newAlpha = alpha.concat({
            id : alpha.length +1,
            alphabet : inputAlpha,
        });

        setInputAlpha("");
        setAlpha(newAlpha);
    }


    const deleteAlpha = (value) =>{ // 매개변수로 받는 value는 삭제하려는 알파벳의 id값을 뜻함
        const xAlpha = alpha.filter((alphabet)=> alphabet.id != value )

        setAlpha(xAlpha);
    }

    return(
        <>
        <input type="text" placeholder="알파벳 입력" 
        value={inputAlpha} //value 속성은 inputAlpha 상태와 연결되어 입력된 값이 표시
        // onChange 이벤트 핸들러를 통해 입력값이 변경될 때마다 setInputAlpha 함수를 호출하여 inputAlpha 상태를 업데이트
        onChange={(e)=>setInputAlpha(e.target.value)}>
        </input>
        <button onClick={addAlpha} >ADD</button>
        <ol>
        {alpha
        .map((value) => (
          <li key={value.id} onDoubleClick={()=>deleteAlpha(value.id)}>{value.alphabet}</li>
        ))}
        </ol>
        </>
    )
}

export default PracAgain;