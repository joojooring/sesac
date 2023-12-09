import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PhotoDetailPage () {

    const [photo, setPhoto] = useState(null)
    const [error, setError] = useState("Wait...")
    const {id} = useParams()

    const getPhotoDetail = async() => {

        try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)

        if(res.ok){
        const getphotophoto = await res.json()
        setPhoto(getphotophoto);
        } else {
            throw Error("존재하지 않는 사진입니다.")
        }
        } catch(error) {
            setError(error.message)

        }
    }

    useEffect(()=>{
        getPhotoDetail()
    },[])
    
    return(
        <>
        <div> 사진 상세 페이지 입니다.</div>

        {photo ? (
        <ul>
            <li>번호 : {photo.id}</li>
            <li>사진제목 : {photo.title}</li>
            <img src={`${photo.thumbnailUrl}`}></img>

        </ul>

        )
        : <div>{error}</div>
        
    }
        </>
    )
};