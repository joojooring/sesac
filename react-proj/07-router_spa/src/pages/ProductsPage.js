import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductsPage () {

    const [product, setProduct] = useState(null)
    const getProducts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const products = await response.json();
        setProduct(products);
        // fetch대신 axios설치해서 axios로 대체해도 됨
        // fetch는 res.json으로 파싱이 필요
    };

    useEffect(()=> {
        getProducts();
    }, [])
    return(
        <>
        <div>상품 페이지 입니다.</div>
        {product ? 
        <div>
            {product.map((value)=>(
            <ul key={value.id}>
                <li>번호 : {value.id}</li>
                <li>상품명 : {value.title}</li>
                <li>상품설명 : {value.body}</li>
                <li>
                    {/* /product/1, product/2 */}
                    <Link to={`/product/${value.id}`}>상세페이지로 이동</Link>
                </li>
            </ul>
            ))}
        </div> : <div>Loading...</div>}
        </>
    )
};