import {useState} from "react"

function PracThree () {
    const userList = [
        {id :"", title : "", username:""}
    ]

    const [list, setList] = useState(userList)
    const [newTitle, setNewTitle] = useState("")
    const [newUsername, setNewUsername] = useState("")

    const addText = () => {

        const
        
         newObj = {id : list.length, title: newTitle, username : newUsername}
        const newList = list.concat(newObj)
        setList(newList);
        setNewTitle("");
        setNewUsername("");
    }

    return(
        <>
        <fieldset>
        <label>
            작성자 : <input type="text" value={newUsername} onChange={(e)=>{setNewUsername(e.target.value)}}></input>
            제목 : <input type="text" value={newTitle} onChange={(e)=>{setNewTitle(e.target.value)}}></input>
        <button onClick={addText}>작성</button>
        </label>
        </fieldset>

        <table border="1" cellSpacing="0">

            <thead>

            <tr >
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>

        {list.map((value)=>{
            return (
                <tr key={value.id}> 
            <td >{value.id} </td>
            <td >{value.title} </td>
            <td> {value.username} </td>
            </tr>
            )
        })}    
        </tbody>
        </table>

        </>
    )
}

export default PracThree;