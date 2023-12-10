import {useState} from "react";
export default function MapFilterPrac () {

    // filter로는 검색어랑 작성자가 같을때, 검색어랑 댓글이 같을 때
    // map으로 객체형태의 배열이 나오게끔

    const [list, setList ] = useState([
        {id : 1, username: "민수", comment : "안뇽"},
        {id : 2, username: "지민", comment : "하이하이"},
        {id : 3, username: "희수", comment : "멋쟁이"},
    ]);

    const [newName, setNewName] = useState("")
    const [newComment, setNewComment] = useState("")

    const [searchTxt, setSearchTxt] = useState("")
    const [searchType, setSearchType] = useState("")

    const [result, setResult] = useState([])

    const handleOnClick = () => {
        if(newName==="" || newComment===""){
        }else{
            const newObj = {id: list.length+1, username: newName, comment: newComment}
            const newList = list.concat(newObj);
            setList(newList);
            setNewName("");
            setNewComment("");
        }
    };

    const searchButton = () => {
        // earchTxt 변수의 값이 공백 문자로만 이루어져 있다면,
        //  result 배열에는 아무 요소도 포함되지 않게하여 
        // result 배열에는 아무런 요소도 추가되지 않게함
        if(searchTxt.trim() === ""){
            setResult([]);
        }else{
            const searchResult = list.filter((value)=>{
                if(searchType === "작성자") {
                    return value.username.includes(searchTxt) // 작성자로 필터링
                }else if (searchType ==="댓글") {
                    return value.comment.includes(searchTxt) // 댓글로 필터링
                }
            });
            setResult(searchResult); // 검색 결과 업데이트
        }
    }


    return (
        <>
        <h3>map filter 종합실습</h3>
        작성자 : <input 
                    type="text" 
                    value={newName} 
                    onChange={(e)=>setNewName(e.target.value)}>
                </input>
        댓글 : <input 
                    type="text" 
                    value={newComment} 
                    onChange={(e)=>setNewComment(e.target.value)}>
                </input>
        <button onClick={handleOnClick}>작성</button> <br />

        <select
            value={searchType}
            onChange={(e)=>{
                setSearchType(e.target.value)
            }}
            >
            <option>작성자</option>
            <option>댓글</option>
        </select>
        <input 
            type="text" 
            placeholder="검색어"
            value={searchTxt}
            onChange={(e)=>{
                setSearchTxt(e.target.value);
            }}
            ></input>
        <button onClick={searchButton}>검색</button> <br /><br /><br />

        <h3>전체 댓글 목록</h3>
        <table border="1">            
            <tr>
                <th>번호</th>
                <th>작성자</th>
                <th>댓글</th>
            </tr>
            <tbody>
                {list.map((value)=>{
                    return (
                        <tr key={list.id}>
                            <td>{value.id}</td>
                            <td>{value.username}</td>
                            <td>{value.comment}</td>
                        </tr>
                    )
                })}
            </tbody>
           </table>


        {result.length > 0 ? (
            <>
            <h3>댓글 검색 결과</h3>
            <table border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>댓글</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((value)=>(
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.username}</td>
                            <td>{value.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        ) : (<p>검색 결과가 없습니다. </p>)}
        </>
    )
};