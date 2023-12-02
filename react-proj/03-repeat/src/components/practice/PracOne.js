import {useState} from "react";

function PracOne() {
    const userList = [
        {id :1, username : "코디", useremail : "codi@gmail.com" },
        {id :2, username : "쥬쥬밥", useremail : "wwwwwwwee@gmail.com" },
    ]

    const [user, setUser] = useState(userList);
    const [newUsername, setNewUsername] = useState(""); 
    const [newUseremail, setNewUseremail] = useState(""); 

    const addUser = () => {
        const newObj = {id : user.length +1, username : newUsername, useremail : newUseremail}
        const newList = user.concat(newObj)
        setUser(newList)
        setNewUsername("");
        setNewUseremail("")
    }

    const enterAddUser = (event) => {
        if(event.key === "Enter") {
            addUser();
        }
    }

    const deletUser = (id) => {
        const newList = user.filter((value)=>{
            return value.id !=id;
        });

        setUser(newList);

    }

    return(
        <>
        <input type="text" value={newUsername} onChange={(e)=>{setNewUsername(e.target.value)}} placeholder="이름"></input>
        <input type="text" value={newUseremail} onChange={(e)=>{setNewUseremail(e.target.value)}} onKeyPress={enterAddUser} placeholder="이메일"></input>
        <button onClick={addUser} >등록</button>
        <div>
            {user.map((value)=>{
                return (
                <h4 key={value.id} onDoubleClick={()=>{deletUser(value.id)}}>
                    {value.username} : {value.useremail}

                </h4>
                )
            })}
        </div>
        </>
    )
}

export default PracOne;