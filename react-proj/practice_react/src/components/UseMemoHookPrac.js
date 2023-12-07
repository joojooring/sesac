import {useState, useCallback, useMemo, useReducer} from "react";

export default function UseMemoHookPrac () {

    // searchword에 변화가 있으면 컴포넌트가 리랜더링 되는데 그때 useMemo가 기능
    const [text, setText] = useState("")
    const [searchWord, setSearchWord] = useState("")

    const wordCount = useMemo(()=>{
        console.log("🦖🦖🦖")
        const words = text.split(" ");
        const count = words.filter((a)=>a.includes(searchWord)).length;
        // const count = words.filter((word) => word ===searchWord ).length;
        return count;

    },[text, searchWord])
    

//             return words.filter((a)=>a.includes(word)).length;


    // const wordCount = useMemo((text, word)=>{
    //     if (text.trim() && word.trim()){
    //         const words = text.split(" ");
    //         // filter함수는 배열의 각 요소에 대해 주어진 조건을 만족하는 요소들로 새로운 배열을 생성해줌
    //         // filter 함수의 매개변수로 전달되는 함수는 각 요소를 검사하여 조건을 만족하는지 판별하는 로직을 구현

            
    //         return words.filter((a)=>a.includes(word)).length;
    //     };
    //     return 0;
    // },[text, searchWord])

    return(
        <>
        <h3>리액트 훅 실습</h3>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="원하는 글을 작성하세요."></input> <br />
        <input type="text" value={searchWord} onChange={(e)=>setSearchWord(e.target.value)} placeholder="찾을 단어를 입력하세요."></input>

        <div>{`"`+ searchWord +`"`} 단어의 빈도수 : {wordCount}</div>
        </>
    )
};

