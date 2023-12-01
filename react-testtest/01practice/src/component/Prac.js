import { useState } from "react";

function Prac () {
    const [number, setNumber] = useState(0);

    return (
        <>
        <div> 숫자 {number} 
            <button onClick={()=>{
                // setNumber(number +1);
                setNumber((prevNumber)=> prevNumber +1);
                }}>+</button>
            <button onClick={()=>{
                // setNumber(number-1)
                setNumber((prevNumber)=> prevNumber-1)
                }}>-</button>
        </div>
        </>
    )

};

export default Prac;