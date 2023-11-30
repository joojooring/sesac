import { useState } from "react";

import image1 from "./사과.jpg"
import image2 from "./복숭아.jpg"
import image3 from "./바나나.jpg"
import image4 from "./포도.jpg"


const PracFour = () => {

    const [fruit, setFruit] = useState(image1)
    const fruitImgChange = (e) => {
        setFruit(e.target.value);
    }

    const [name, setName] = useState("")
    const nameChange = (e) => {
        setName(e.target.value)
    }

    const [backcolor, setBackColor] = useState("")
    const backColorChange = (e) => {
        setBackColor(e.target.value)
    }

    const [txtcolor, setTextColor] = useState("")
    const txtColorChange = (e) => {
        setTextColor(e.target.value)
    }
    
    return (
        <div>
            과일 : <select value={fruit} onChange={fruitImgChange}>
            <option value={image1}>사과</option>
            <option value={image2}>복숭아</option>
            <option value={image3}>바나나</option>
            <option value={image4}>포도</option>
            </select>

            배경색 : <select value={backcolor} onChange={backColorChange}>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">피링</option>
            </select>

            글자색 : <select value={txtcolor} onChange={txtColorChange}>
            <option value="red" >빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">피링</option>
            </select>
       
            <br />
        내용 : <input type="text" value={name} placeholder="내용을 입력하세요." onChange={(e)=>{
            setName(e.target.value);
        }} onKeyDown={nameChange} ></input>


        <img style={{height: "300px"}} src={fruit}></img>
        <div style={{ backgroundColor: backcolor, color:txtcolor }}>{name}</div>
        </div>
    )
}

export default PracFour;