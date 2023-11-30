import {useState} from "react";

function Increase () {
    const [number1, setNumber1 ] = useState(0);
    const [number2, setNumber2 ] = useState(0);


    return (
        <>
        <div>
            함수형 증가버튼{number1} :
            <button onClick={()=>{
                    setNumber1((prevNumber)=> prevNumber +1);

            }}>+1</button> 
        </div>
        </>
    )
}

function Decrease () {

    const [number1, setNumber1 ] = useState(0);
    const [number2, setNumber2 ] = useState(0);

    return (
        <>
        <div>
            함수형 감소버튼{number2} :
        <button onClick={()=>{
                    setNumber2((prevNumber)=> prevNumber -2);

        }}>-2</button> 
        </div>
        </>
    )
}
export { Increase, Decrease };

// export default {Increase, Decrease};