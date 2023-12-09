import {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom"

export default function Photos () {

    const [photo, setPhoto] = useState(null)

    const getPhoto = async() => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
            const photos = await res.json();
            setPhoto(photos);
    }
    useEffect(()=>{
        getPhoto()
    },[])

    return(
        <>
        <div>실습!!</div>
        {photo ? 
        <div>
            {photo.map((value)=>{
                return(
                <ul key={value.id}>
                    <li>번호 : {value.id}</li>
                    <li>사진제목 : {value.title}</li>
                    <li>
                        <Link to={`/photos/${value.id}`}>사진 상세페이지로 이동</Link>
                    </li>
                    {/* <img src={`${value.thumbnailUrl}`}></img> */}
                </ul>
                )
             })}
        </div> : <div>Wait...</div>}
        
        
        </>
    )
};