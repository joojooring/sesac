import { useState } from "react"

export default function MapFilterPracAgain(){

    const userList = [{ id: "", username: "", title: "" }];

    const [list, setList] = useState(userList);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("")

    const clickButton = () => {
        const newObj = {id: list.length, username:name, title:title}
        const newList = list.concat(newObj);
        setList(newList);
        setName("");
        setTitle("");
    }
    return(
        <>
        <form>
            <fieldset>
                작성자 : <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input> { "  "}
                제목 : <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input> { "  "}
                <button onClick={clickButton}>작성</button>
            </fieldset>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                </tr>
            </thead>
            <tbody>
                {list.map((value)=>{
                    return (
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.username}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                
            </tfoot>
        </table>
        </>
    )
};