import {useState} from "react";
function FilterPracAgain() {

    // filter() : 인자로 전달 받은 callback함수의 테스트 조건을 통과하는 요소를 모아 새로운 배열을 생성하는 함수
    // arr.filter(콜백함수, this객체-생략가능)
    // 첫번째인자인 콜백함수 : 배열의 각 요소에 실행할 조건 함수
    // const 새배열 = 배열.filter((배열의 요소)=>조건)

    const [list, setList] = useState([
        {id: 1, alpha: "ㄱ"},
        {id: 2, alpha: "ㄴ나"},
        {id: 3, alpha: "ㄷ디리"},
        {id: 4, alpha: "ㄹ라마바"},
        {id: 5, alpha: "ㅁ마바사아"},
    ])
    return(
        <>
        <ol>
            {list.filter((value)=>value.alpha.length >3)
                 .map((filteredValue)=>(
                    <li key={filteredValue.id}>{filteredValue.alpha}</li>
                ))}
        </ol>
        </>
    )
}

export default FilterPracAgain;