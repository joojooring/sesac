import {useState} from "react";
export default function MapFilterPrac () {

    // filter로는 검색어랑 작성자가 같을때, 검색어랑 댓글이 같을 때
    // map으로 객체형태의 배열이 나오게끔

    const [list, setList ] = useState([
        {id : 1, username: "민수", comment : "안뇽"},
        {id : 2, username: "지민", comment : "하이하이"},
        {id : 3, username: "희수", comment : "멋쟁이"},
    ]);

    const [inputs, setInputs] = useState(
        {username: "", comment:"", search:"" }
    );
    const {username, comment, search} =inputs;

    const handleOnChange = () => {

    }


    return (
        <>
        <h3>map filter 종합실습</h3>
        작성자 : <input type="text" value={list.username} onChange={(e)=>setList(e.target.value)}></input>
        댓글 : <input type="text" value={list.comment} onChange={(e)=>setList(e.target.value)}></input>
        <button>작성</button> <br />

        <select>
            <option>작성자</option>
            <option>댓글</option>
        </select>
        <input type="text" placeholder="검색어"></input>
        <button>검색</button> <br /><br /><br />

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
        </>
    )
};