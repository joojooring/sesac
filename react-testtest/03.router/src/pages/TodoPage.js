import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TodoPage(){
    const [todo, setTodo] = useState(null)
    const getTodo = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const todos = await response.json();
        setTodo(todos);
        // fetch대신 axios설치해서 axios로 대체해도 됨
        // fetch는 res.json으로 파싱이 필요
    };

    useEffect(()=> {
        getTodo();
    }, [])
    return(
        <>
        <div> To Do List</div>
        {todo ? 
        <div>
            {todo.map((value)=>(
            <ul key={value.id}>
                <li>번호 : {value.id}</li>
                <li>할 일 : {value.title}</li>
                <li>완료여부 : {value.completed}</li>
                <li>
                    {/* /product/1, product/2 */}
                    <Link to={`/todos/${value.id}`}>상세페이지로 이동</Link>
                </li>
            </ul>
            ))}
        </div> : <div>Loading...</div>}
        </>
    )
};