import {useState} from "react";

function Greeting() {

    const [msg, setMsg] = useState("안뇽안뇽");
    return (
    <>
    <div>{msg}</div>
    <button onClick={()=>{
        setMsg("잘가~~또보자")
    }}>클릭!</button>
    </>
    )
  }
 
  
  export default Greeting;