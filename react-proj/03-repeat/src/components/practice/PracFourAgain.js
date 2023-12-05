import { useState } from "react";

function PracFourAgain() {
  const [list, setList] = useState([
    { id: 1, name: "민수", comment: "안녕" }, // 초기 댓글 목록
    { id: 2, name: "지민", comment: "뿡뿡" },
    { id: 3, name: "희수", comment: "짜잔" },
  ]);

  const [newName, setNewName] = useState(""); // 새로운 댓글의 작성자
  const [newComment, setNewComment] = useState(""); // 새로운 댓글 내용
  const [searchTxt, setSearchTxt] = useState(""); // 검색어
  const [searchType, setSearchType] = useState("작성자"); // 검색 유형
  const [result, setResult] = useState([]); // 검색 결과

  const inputAdd = () => {
    const newObj = { id: list.length + 1, name: newName, comment: newComment }; // 새로운 댓글 객체 생성
    const newList = list.concat(newObj); // 기존 댓글 목록과 새로운 댓글을 합쳐 새로운 목록 생성
    setList(newList); // 새로운 댓글 목록으로 업데이트
    setNewName(""); // 작성자 입력 필드 초기화
    setNewComment(""); // 댓글 입력 필드 초기화
  };

  const searchFun = () => {
    if(searchTxt.trim() === "") {
        setResult([]);
    }else{
    const searchResult = list.filter((value) => {
      if (searchType === "작성자") {
        return value.name.includes(searchTxt); // 작성자로 필터링
      } else if (searchType === "댓글") {
        return value.comment.includes(searchTxt); // 댓글로 필터링
      }
    });
    setResult(searchResult); // 검색 결과 업데이트
  }
}

  return (
    <>
      작성자 :{" "}
      <input
        type="text"
        // value속성으로 newName 상태변수를 바인딩하여 입력된 값을 가져올 수 있음
        value={newName}
        // onChange 이벤트 핸들러를 통해 선택된 값을 setNewName 함수를 사용하여 업데이트
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      ></input>{" "}
      댓글 :{" "}
      <input
        type="text"
        // value속성으로 newComment 상태변수를 바인딩하여 입력된 값을 가져올 수 있음
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      ></input>
      <button onClick={inputAdd}>작성</button>
      <br />

      <select
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
      >
        <option>작성자</option>
        <option>댓글</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={searchTxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
      ></input>
      <button onClick={searchFun}>검색</button>
      <h3>전체 댓글 목록</h3>
      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>댓글</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.comment}</td>
            </tr>
          ))}
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
              {result.map((value) => (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (<p>검색 결과가 없습니다.</p>)}
    </>
  );
}

export default PracFourAgain;
