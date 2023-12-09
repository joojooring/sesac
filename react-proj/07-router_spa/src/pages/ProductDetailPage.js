import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function ProductDetailPage () {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState("Loading...")
    const {id} = useParams()
    console.log(id);

    //  /product/:id/:name
    // 위에걸로하면 params => {id : value, name : value}

    // useSearchParams : 쿼리를 가져오고 싶을 때
    // ~~~~?id=2&name=lily
    const [query, setQuery] = useSearchParams();
    console.log(query);
    console.log(query.get("name")); // lily

    //useNavigate :  Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성해야할 때 
    const navigator = useNavigate()
    // location.href

    const getProduct = async() => {

        // 오류가 날 수도 있는 코드를 try 안에 담음
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if(res.ok){
                const prod = await res.json()
                setProduct(prod);
            } else {
                throw Error("존재하지 않는 상품입니다.")
            }
        // try안에서 오류가 발생시 catch로 이동함
        }catch(error){
            console.log(error);
            setError(error.message)
        }
    };

    useEffect(()=>{
        getProduct()
    },[])

    return(
        <>
        <div>상품 상세 페이지 입니다.</div>

        {/* navigator(-1)하나 이전 페이지로 이동함 */}
        <button onClick={()=>navigator(-1)}>상품 목록으로 이동</button>
        <button onClick={()=>navigator("/")}>홈으로 이동</button>
        <button onClick={()=>navigator("/products")}>상품페이지로 이동</button>

        {/* setQuery는 인자로 보내준 정보를 이용해 새로운 쿼리를 만들고 이동함. 쿼리를 바꿔줌 */}
        <button onClick={()=>setQuery({name : "codee", id : 66})}>setQuery 테스트</button>
        {product ? <>
        <ul>
            <li>번호 : {product.id}</li>
            <li>상품명 : {product.title}</li>

        </ul>
            </> : <div>{error}</div>}
        </>
    )
};